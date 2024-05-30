import { useForm } from "@mantine/form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Form({ props }) {
  const navigate = useNavigate();
  const tryLogin = async () => {
    const name = form.getValues().name;
    const password = form.getValues().password;
    console.log(form.getValues());

    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        username: name,
        password: password,
      });
      console.log(res);

      if (res.status === 200) {
        props();
        // navigate("/Home");

        // document.location = "/Home";
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

  return (
    <div className="flex-row text-center mt-72">
      <div className="text-area mb-2">SignIn</div>
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
