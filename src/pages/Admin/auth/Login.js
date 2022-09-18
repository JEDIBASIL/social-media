import { TextInput, PasswordInput, Button } from "@mantine/core";

const Login = () => {
  return (
    <>
     <div className="adminApp formContainer">
      <div className="authForm">
        <h2>Log in</h2>
        <TextInput label="Username" />
        <PasswordInput label="Password" />
        <Button>Log in</Button>
      </div>
      </div>
    </>
  );
};

export default Login;
