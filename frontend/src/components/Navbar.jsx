import { React } from "react";
import { BiSolidCart, BiSolidUserCircle } from "react-icons/bi";
import "./Navbar.css";

const NavBar = () => {
	const current = window.location.pathname;

	const login = () => {
		window.location.pathname = "/login";
	};

	const logout = () => {
		localStorage.removeItem("token");
		sessionStorage.removeItem("token");
		localStorage.removeItem("isAdmin");
		sessionStorage.removeItem("isAdmin");
		localStorage.removeItem("name");
		sessionStorage.removeItem("name");
		sessionStorage.removeItem("cart");
		window.location.pathname = "/login";
	};

	const checkout = () => {
		window.location.pathname = "/checkout";
	};

	const isLogged =
		localStorage.getItem("token") !== null ||
		sessionStorage.getItem("token") !== null;

	const onLog = isLogged ? logout : login;
	const onCart = isLogged ? checkout : login;

	const isAdmin =
		localStorage.getItem("isAdmin") === "true" ||
		sessionStorage.getItem("isAdmin") === "true";

	const name = localStorage.getItem("name") || sessionStorage.getItem("name");

	return (
		<nav className="navbar navbar-dark fixed-top">
			<div className="container-fluid">
				{/* Ham menu */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasDarkNavbar"
					aria-controls="offcanvasDarkNavbar"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon fs-5"></span>
				</button>

				{/* Page name */}
				<a className="navbar-brand fw-bold me-4 ms-1 ms-md-1" href="/#">
					{" "}
					Silicon Road{" "}
				</a>

				{/* Cart */}
				<div className="row">
					<button
						className="d-none d-md-block ms-4 col-4"
						style={{ background: "none", border: "none" }}
						onClick={onCart}
					>
						<BiSolidCart size={"3em"} color="white" />
						<b style={{ color: "white" }}>Cart</b>
					</button>

					{/* User */}
					<button
						className="d-none d-md-block ms-4 me-3 col-4"
						style={{ background: "none", border: "none" }}
						onClick={onLog}
					>
						<BiSolidUserCircle size={"3em"} color="white" />
						<b style={{ color: "white" }}>
							{isLogged ? "Logout" : "Login"}
						</b>
					</button>
				</div>

				{/* Off Canvas*/}
				<div
					className="offcanvas offcanvas-start text-bg-dark"
					tabIndex="-1"
					id="offcanvasDarkNavbar"
					aria-labelledby="offcanvasDarkNavbarLabel"
				>
					{/* Name */}
					<div className="offcanvas-header">
						<h5
							className="offcanvas-title"
							id="offcanvasDarkNavbarLabel"
						>
							{isLogged ? `Logged as ${name}` : "Main Menu"}
						</h5>
						<button
							type="button"
							className="btn-close btn-close-white"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>

					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
							<li className="nav-item">
								<a
									className={
										"nav-link " +
										(current === "/" ? "active" : "")
									}
									aria-current="page"
									href="/"
								>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a
									className={
										"nav-link " +
										(current === "/checkout"
											? "active"
											: "")
									}
									href="/checkout"
								>
									Cart
								</a>
							</li>
							{isAdmin === true && (
								<li className="nav-item">
									<a
										className={
											"nav-link " +
											(current === "/admin"
												? "active"
												: "")
										}
										href="/admin"
									>
										Admin Page
									</a>
								</li>
							)}
							<li className="nav-item">
								<a
									className={
										"nav-link " +
										(current === "/login" ? "active" : "")
									}
									href="/login"
								>
									Login
								</a>
							</li>
							<li className="nav-item">
								<a
									className={
										"nav-link " +
										(current === "/signup" ? "active" : "")
									}
									href="/signup"
								>
									Sign Up
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
