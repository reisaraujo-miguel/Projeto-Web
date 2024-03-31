import { useRef, useState } from "react";
import { toast } from "react-toastify";
import CustomButton from "../components/Buttons";
import InputBox from "../components/InputBox";
import Identity from "../img/icons/identity.png";
import Mail from "../img/icons/mail.png";
import Password from "../img/icons/password.png";
import Phone from "../img/icons/phone.png";
import UserImage from "../img/icons/user.png";
import ZipCode from "../img/icons/zipcode.png";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [bairro, setBairro] = useState("");
  const [number, setNumber] = useState("");
  const [cep, setCep] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const submitRef = useRef();

  const handleSubmit = async () => {
    if (submitRef.current.reportValidity()) {
      await signUser();
    }
  };

  const signUser = async () => {
    if (confirmPass !== password) {
      toast.error("Passwords Are Not The Same", {
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
    } else if (password === "") {
      toast.error("You Must Provide a Password", {
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

    const url = "http://localhost:3001/users";
    const data = {
      name: name,
      cpf: cpf,
      address: {
        cep: cep,
        bairro: bairro,
        number: number,
      },
      username: username,
      email: email,
      password: password,
      phone: phone,
      isAdmin: false,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.message === "Usuario cadastrado") {
          toast.success("User Created Successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          submitRef.current.reset();
        } else {
          toast.error("Something Went Wrong :(", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something Went Wrong :(", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="SignUpDiv">
      <h1 style={{ marginBottom: "4rem" }}>Create Account</h1>

      <form ref={submitRef}>
        <div className="input-row">
          <div style={{ marginRight: "2rem" }}>
            <InputBox
              image={UserImage}
              inputType={"text"}
              placeholder={"Full name*"}
              setData={setName}
              isRequired={true}
            />
          </div>
          <div>
            <InputBox
              image={Identity}
              inputType={"text"}
              placeholder={"ID number*"}
              setData={setCpf}
              isRequired={true}
            />
          </div>
        </div>

        <br></br>

        <div className="input-row">
          <div style={{ marginRight: "2rem" }}>
            <InputBox
              image={Phone}
              inputType={"text"}
              placeholder={"Phone number"}
              setData={setPhone}
            />
          </div>
          <div>
            <InputBox
              image={ZipCode}
              inputType={"text"}
              placeholder={"Zip Code"}
              setData={setCep}
            />
          </div>
        </div>

        <br></br>

        <div className="input-row">
          <div style={{ marginRight: "2rem" }}>
            <InputBox
              image={ZipCode}
              inputType={"text"}
              placeholder={"District"}
              setData={setBairro}
            />
          </div>
          <div>
            <InputBox
              image={ZipCode}
              inputType={"text"}
              placeholder={"Number"}
              setData={setNumber}
            />
          </div>
        </div>

        <br></br>

        <div className="input-row">
          <div style={{ marginRight: "2rem" }}>
            <InputBox
              image={UserImage}
              inputType={"text"}
              placeholder={"Username*"}
              setData={setUsername}
              isRequired={true}
            />
          </div>
          <div>
            <InputBox
              image={Mail}
              inputType={"email"}
              placeholder={"E-mail*"}
              setData={setEmail}
              isRequired={true}
            />
          </div>
        </div>

        <br></br>

        <div className="input-row">
          <div style={{ marginRight: "2rem" }}>
            <InputBox
              image={Password}
              inputType={"password"}
              placeholder={"Password*"}
              setData={setPassword}
              isRequired={true}
            />
          </div>
          <div>
            <InputBox
              image={Password}
              inputType={"password"}
              placeholder={"Confirm password*"}
              setData={setConfirmPass}
              isRequired={true}
            />
          </div>
        </div>

        <br style={{ marginBottom: "2rem" }}></br>
        <CustomButton text={"Sign up"} onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Signup;
