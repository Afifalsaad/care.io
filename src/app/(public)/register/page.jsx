import RegistrationForm from "@/Components/AuthLayout/RegistrationForm";
import React, { Suspense } from "react";

const Register = () => {
  return (
    <div>
      <Suspense>
        <RegistrationForm></RegistrationForm>
      </Suspense>
    </div>
  );
};

export default Register;
