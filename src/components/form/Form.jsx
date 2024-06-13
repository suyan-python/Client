import { useForm } from "@mantine/form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";

function Form({ props }) {
  const URL = "http://localhost:8080/auth/login";
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const tryLogin = async () => {
    const name = form.getValues().name;
    const password = form.getValues().password;
    // console.log(form.getValues());

    try {
      const res = await axios.post(URL, {
        username: name,
        password: password,
      });
      const token = res.data.data.token;

      if (res.status === 200) {
        props();
        navigate("/Home");
        // localStorage.setItem("token", token);
        storeTokenInLS(token);
      }
    } catch (e) {
      alert("User Invalid");
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
    email: "",
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
    alert("Login Successful, ", user.username);
  };

  return (
    <div className="flex-row text-center mt-72">
      <div className="text-area mb-2">SignIn</div>
      <div className="form-area">
        <form onSubmit={handleSubmit}>
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
            SignIn
          </button>
        </form>

        {/* <div className="name">
          <input
            label="Name"
            placeholder="Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
        </div>
        <div className="password my-1">
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

      <div className="authentication gap-2 justify-center">
        <div className="login">
          <button
            onClick={props}
            className="bg-red-500 text-white px-2 py-1 my-2 rounded-xl"
          >
            SignIn
          </button>
        </div>
        <div className="back">
          <Link to={"/"}>Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Form;
