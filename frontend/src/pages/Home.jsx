import Carousel from "../components/Carousel";
import "./Home.css";

const Home = () => (
	<div className="stub gap-5">
		<div className="innerDiv">
			<label className="labelTitle"> SPECIAL OFFERS </label>
			<Carousel />
		</div>
		<div className="innerDiv">
			<label className="labelTitle"> POPULAR </label>
			<Carousel />
		</div>
		<div className="innerDiv">
			<label className="labelTitle"> LAPTOPS </label>
			<Carousel />
		</div>
		<div className="innerDiv">
			<label className="labelTitle"> DESKTOPS </label>
			<Carousel />
		</div>
	</div>
);

export default Home;
