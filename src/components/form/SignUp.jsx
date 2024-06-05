import { useForm } from "@mantine/form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";

function SignUp({ props }) {
  const URL = "http://localhost:8080/auth/sign-up";
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const trySignup = async () => {
    const name = form.getValues().name;
    const password = form.getValues().password;
    console.log(name);

    try {
      const res = await axios.post(URL, {
        username: name,
        password: password,
      });
      const token = res.data.data.token;

      if (res.status === 200) {
        alert("SignUp Success");
        navigate("/");
        // localStorage.setItem("token", token);
        storeTokenInLS(token);
      }
    } catch (e) {
      alert("SignUp Error");
      console.log(e);
    }
  };

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      password: "",
    },
  });

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user.username);
  };

  return (
    <div className="flex-row text-center mt-72">
      <div className="text-area mb-2">Sign-Up</div>
      <div className="form-area">
        <form className="" onSubmit={handleSubmit}>
          <div className="username">
            <input
              type="text"
              name="username"
              id="username"
              label="username"
              placeholder="username"
              key={form.key("name")}
              {...form.getInputProps("name")}
              required
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
            />
          </div>

          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              label="email"
              placeholder="email"
              key={form.key("name")}
              {...form.getInputProps("name")}
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div className="phone">
            <input
              type="number"
              name="phone"
              id="phone"
              label="phone"
              placeholder="phone"
              key={form.key("name")}
              {...form.getInputProps("name")}
              required
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              id="password"
              label="password"
              placeholder="password"
              key={form.key("name")}
              {...form.getInputProps("name")}
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white px-2 py-1 my-2 rounded-xl"
          >
            SignUp
          </button>
        </form>

        {/* <div className="password my-1">
          <input
            mt="md"
            label="Password"
            type="password"
            placeholder="Password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
        </div> */}
      </div>

      <div className="authentication gap-2  justify-center">
        {/* <div className="signUp">
          <button
            onClick={trySignup}
            className="bg-red-500 text-white px-2 py-1 my-2 rounded-xl"
          >
            SignUp
          </button>
        </div> */}
        <div className="back">
          <Link to={"/"}>Back</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
