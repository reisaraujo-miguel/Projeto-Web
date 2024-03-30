import React, { useRef, useState } from "react";
import styled from "styled-components";
import CheckoutCart from "./CheckoutCart";
import Confirmation from "./Confirmation";
import PaymentMethod from "./PaymentMethod";
import ShipmentForm from "./Shipment";

const MainContainer = styled.div`
	width: 100%;
	max-width: 100%;
	padding: 8% 8%;
	background-color: #ffffff;
	border-radius: 2%;
`;

const StepContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 8%;
	position: relative;
	:before {
		content: "";
		position: absolute;
		background: #f3e7f3;
		height: 8%;
		width: 100%;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
	}
	:after {
		content: "";
		position: absolute;
		background: #6200ee;
		height: 8%;
		width: ${({ width }) => width};
		top: 50%;
		transition: 0.4s ease;
		transform: translateY(-50%);
		left: 0;
	}
`;

const StepWrapper = styled.div`
	position: relative;
	z-index: 1;
`;

const StepStyle = styled.div`
	width: 3em;
	height: 3em;
	border-radius: 50%;
	background-color: #ffffff;
	background-color: ${({ step }) =>
		step === "completed" ? "#6200EE" : "#F3E7F3"};
	border: 3px solid
		${({ step }) => (step === "completed" ? "#6200EE" : "#F3E7F3")};
	transition: 0.4s ease;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StepCount = styled.span`
	font-size: 1.4em;
	color: #ffffff;
`;

const StepsLabelContainer = styled.div`
	position: absolute;
	top: 150%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
	font-size: 1em;
	color: #000000;
`;

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 -4%;
	margin-top: 8%;
`;

const ButtonStyle = styled.button`
	border-radius: 0.5em;
	border: 0;
	background: #6200ee;
	color: #ffffff;
	font-size: medium;
	cursor: pointer;
	padding: 1%;
	width: 15%;
	:active {
		transform: scale(0.98);
	}
	:disabled {
		background: #f3e7f3;
		color: #000000;
		cursor: not-allowed;
	}
`;

const CheckMark = styled.div`
	font-size: 2em;
	font-weight: 600;
	color: #ffffff;
	-ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
	-webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
	transform: scaleX(-1) rotate(-46deg);
`;

const steps = [
	{
		label: "Items",
		step: 1,
	},
	{
		label: "Payment",
		step: 2,
	},
	{
		label: "Shipment",
		step: 3,
	},
	{
		label: "Confirmation",
		step: 4,
	},
];

const ProgressSteps = () => {
	const [activeStep, setActiveStep] = useState(1);
	const [hasCart, setHasCart] = useState(false);
	const [payment, setPayment] = useState(null);
	const [address, setAddress] = useState(null);
	const [canContinue, setContinue] = useState(false);

	const submitRef = useRef();

	const nextStep = () => {
		if (activeStep === 3 || activeStep === 2) {
			submitRef.current.requestSubmit();
			if (canContinue) {
				setActiveStep(activeStep + 1);
				setContinue(false);
			}
		} else {
			setActiveStep(activeStep + 1);
		}
	};

	const prevStep = () => {
		setActiveStep(activeStep - 1);
	};

	const finish = () => {
		const cart = JSON.parse(sessionStorage.getItem("cart"));

		cart.forEach((item) => {
			const url = "http://localhost:3001/products/" + item.slug;

			const data = {
				quantity: item.stock - item.quantity,
			};

			fetch(url, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
		});

		sessionStorage.removeItem("cart");

		window.location.pathname = "/finished";
	};

	const totalSteps = steps.length;

	const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

	return (
		<MainContainer>
			<h1 id="checkout-title">{"Checkout"}</h1>
			<StepContainer className="mb-5" width={width}>
				{steps.map(({ step, label }) => (
					<StepWrapper key={step}>
						<StepStyle
							step={
								activeStep >= step ? "completed" : "incomplete"
							}
						>
							{activeStep > step ? (
								<CheckMark>L</CheckMark>
							) : (
								<StepCount>{step}</StepCount>
							)}
						</StepStyle>
						<StepsLabelContainer>
							<StepLabel key={step}>{label}</StepLabel>
						</StepsLabelContainer>
					</StepWrapper>
				))}
			</StepContainer>
			{activeStep === 1 && <CheckoutCart setHasCart={setHasCart} />}
			{activeStep === 2 && (
				<PaymentMethod
					updatePayment={setPayment}
					setContinue={setContinue}
					submitRef={submitRef}
				/>
			)}
			{activeStep === 3 && (
				<ShipmentForm
					updateAddress={setAddress}
					setContinue={setContinue}
					submitRef={submitRef}
				/>
			)}
			{activeStep === 4 && (
				<Confirmation payment={payment} address={address} />
			)}
			<ButtonsContainer>
				<ButtonStyle
					onClick={prevStep}
					disabled={activeStep === 1}
					style={{ marginLeft: "2%" }}
				>
					PREVIOUS STEP
				</ButtonStyle>
				{activeStep < 4 && (
					<ButtonStyle
						onClick={nextStep}
						disabled={!hasCart}
						style={{ marginRight: "2%" }}
					>
						NEXT STEP
					</ButtonStyle>
				)}
				{activeStep === 4 && (
					<ButtonStyle onClick={finish} style={{ marginRight: "2%" }}>
						FINISH
					</ButtonStyle>
				)}
			</ButtonsContainer>
		</MainContainer>
	);
};

export default ProgressSteps;
