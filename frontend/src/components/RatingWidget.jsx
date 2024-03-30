import React, { useState } from "react";
import "./RatingWidget.css";

const RatingWidget = ({ isStatic = false, userRating = 0 }) => {
	const [rating, setRating] = useState(0);
	const [hoveredRating, setHoveredRating] = useState(0);

	const handleRatingChange = (value) => {
		setRating(value);
	};

	const handleMouseEnter = (value) => {
		setHoveredRating(value);
	};

	const handleMouseLeave = () => {
		setHoveredRating(0);
	};

	if (isStatic) {
		return (
			<div>
				{[1, 2, 3, 4, 5].map((value) => (
					<Star
						key={value}
						value={value}
						filled={value <= userRating}
					/>
				))}
			</div>
		);
	}

	return (
		<div>
			<div>
				{[1, 2, 3, 4, 5].map((value) => (
					<Star
						key={value}
						value={value}
						filled={value <= rating}
						hovered={value <= hoveredRating}
						onClick={handleRatingChange}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					/>
				))}
			</div>
		</div>
	);
};

const Star = ({
	value,
	filled,
	hovered,
	onClick = () => {},
	onMouseEnter = () => {},
	onMouseLeave = () => {},
}) => {
	const handleClick = () => {
		onClick(value);
	};

	const handleMouseEnter = () => {
		onMouseEnter(value);
	};

	const handleMouseLeave = () => {
		onMouseLeave();
	};

	const starClass = `star ${filled ? "filled" : ""} ${
		hovered ? "hovered" : ""
	}`;

	return (
		<span
			className={starClass}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			&#9733;
		</span>
	);
};

export default RatingWidget;
