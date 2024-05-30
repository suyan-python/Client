import { useForm } from "@mantine/form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

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

  return (
    <div className="flex-row text-center mt-72">
      <div className="text-area mb-2">Sign-Up</div>
      <div className="form-area">
        <div className="name">
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
        </div>
      </div>

      <div className="authentication gap-2  justify-center">
        <div className="signUp">
          <button
            onClick={trySignup}
            className="bg-red-500 text-white px-2 py-1 my-2 rounded-xl"
          >
            SignUp
          </button>
        </div>
        <div className="back">
          <Link to={"/"}>Back</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
