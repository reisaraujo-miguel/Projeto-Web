import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import CustomButton from "../components/Buttons";
import InputBox from "../components/InputBox";
import SearchBarAdmin from "../components/SearchBarAdmin";
import excludeMark from "../img/Buttons/excludeMark.png";
import okayMark from "../img/Buttons/okayMark.png";
import "./UserOptions.css";

const UserOptions = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cep, setCEP] = useState("");
	const [bairro, setBairro] = useState("");
	const [number, setNumber] = useState("");
	const [phone, setPhone] = useState("");
	const [confirmationPass, setConfirmationPass] = useState("");
	const [result, setResult] = useState(null);

	const formRef = useRef();

	function removeUser() {
		if (result === null) {
			toast.error("Please use the search bar! :(", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}

		const url = "http://localhost:3001/users/" + result.username;

		fetch(url, {
			method: "DELETE",
		});

		toast.success("User Deleted", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

		formRef.current.reset();

		setResult(null);
	}

	function promoteUser() {
		if (result === null) {
			toast.error("Please use the search bar! :(", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}

		const url = "http://localhost:3001/users/" + result.username;
		const data = {
			name: result.name,
			email: result.email,
			password: result.password,
			isAdmin: true,
		};

		fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		toast.success("User Promoted", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

		formRef.current.reset();

		setResult(null);
	}

	function updateUser() {
		if (result === null) {
			toast.error("Please use the search bar!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}
		if (confirmationPass !== password) {
			toast.error("Passwords do not match!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			return;
		}

		const url = "http://localhost:3001/users/" + result.username;
		const data = {
			name: name === "" ? result.name : name,
			email: email === "" ? result.email : email,
			password: password === "" ? result.password : password,
			phone: parseInt(phone === "" ? result.phone : phone),
			address: {
				cep: parseInt(cep === "" ? result.address.cep : cep),
				bairro: bairro === "" ? result.address.bairro : bairro,
				number: parseInt(
					number === "" ? result.address.number : number
				),
			},
			isAdmin: false,
		};

		fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		toast.success("User Updated", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

		formRef.current.reset();

		setResult(null);
	}

	return (
		<div className="options-wrapper">
			<div className="user-wrapper">
				<div className="label-wrapper">
					<label className="text"> Edit user </label>
				</div>
				<div className="searchbar-user">
					<SearchBarAdmin
						placeholder="Search Users"
						endpoint="users/"
						setData={setResult}
					/>
				</div>
				<div className="gap-2">
					<form ref={formRef}>
						<div className="inputbox-wrapper">
							<InputBox
								inputType="text"
								placeholder={
									result === null ? "Name" : result.name
								}
								setData={setName}
							/>
						</div>
						<div className="inputbox-wrapper">
							<InputBox
								inputType="text"
								placeholder={
									result === null ? "Email" : result.email
								}
								setData={setEmail}
							/>
						</div>

						<div className="inputbox-wrapper">
							<InputBox
								inputType="text"
								placeholder={
									result === null
										? "Username"
										: result.username
								}
								disabled={true}
								backgroundColor="#e3e3e3"
							/>
						</div>

						<div className="inputbox-wrapper">
							<InputBox
								inputType="text"
								placeholder={
									result === null ? "CPF" : result.cpf
								}
								disabled={true}
								backgroundColor="#e3e3e3"
							/>
						</div>

						<div className="inputbox-wrapper">
							<InputBox
								inputType="number"
								placeholder={
									result === null || result.phone === null
										? "Phone"
										: result.phone
								}
								setData={setPhone}
							/>
						</div>

						<div className="inputbox-wrapper">
							<InputBox
								inputType="number"
								placeholder={
									result === null ||
									result.address.cep === null
										? "CEP"
										: result.address.cep
								}
								setData={setCEP}
							/>
						</div>

						<div className="inputbox-wrapper">
							<InputBox
								inputType="text"
								placeholder={
									result === null ||
									result.address.bairro === ""
										? "District"
										: result.address.bairro
								}
								setData={setBairro}
							/>
						</div>
						<div className="inputbox-wrapper">
							<InputBox
								inputType="number"
								placeholder={
									result === null ||
									result.address.number === null
										? "Number"
										: result.address.number
								}
								setData={setNumber}
							/>
						</div>

						<div className="inputbox-wrapper">
							<InputBox
								inputType="password"
								placeholder="New Password"
								setData={setPassword}
							/>
						</div>
						<div className="inputbox-wrapper">
							<InputBox
								inputType="password"
								placeholder="Confirm New Password"
								setData={setConfirmationPass}
							/>
						</div>
					</form>
				</div>
				<div className="button-user">
					<CustomButton text="Promote" onClick={promoteUser} />
					<CustomButton
						image={okayMark}
						text="Update"
						onClick={updateUser}
					/>
					<CustomButton
						image={excludeMark}
						text="Delete"
						onClick={removeUser}
					/>
				</div>
			</div>
		</div>
	);
};

export default UserOptions;
