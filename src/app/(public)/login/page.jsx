import LoginForm from "@/Components/AuthLayout/LoginForm";
import React, { Suspense } from "react";

const Login = () => {
  return (
    <div>
      <Suspense>
        <LoginForm></LoginForm>
      </Suspense>
    </div>
  );
};

export default Login;
