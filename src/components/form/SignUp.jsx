import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = "http://localhost:5000/api/auth/register";

function SignUp({ props }) {
  // const URL = "http://localhost:8080/auth/sign-up";
  // const { storeTokenInLS } = useAuth();

  // const trySignup = async () => {
  //   const name = form.getValues().name;
  //   const password = form.getValues().password;
  //   console.log(name);

  //   try {
  //     const res = await axios.post(URL, {
  //       username: name,
  //       password: password,
  //     });
  //     const token = res.data.data.token;

  //     if (res.status === 200) {
  //       alert("SignUp Success");
  //       navigate("/");
  //       // localStorage.setItem("token", token);
  //       storeTokenInLS(token);
  //     }
  //   } catch (e) {
  //     alert("SignUp Error");
  //     console.log(e);
  //   }
  // };

  // const form = useForm({
  //   mode: "uncontrolled",
  //   initialValues: {
  //     name: "",
  //     password: "",
  //   },
  // });

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex-row text-center mt-72">
      <div className="text-area mb-2">Sign-Up</div>
      <div className="form-area">
        <form onSubmit={handleSubmit}>
          <div className="username">
            <input
              type="text"
              name="username"
              id="username"
              label="username"
              placeholder="username"
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
            SignUppp
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
