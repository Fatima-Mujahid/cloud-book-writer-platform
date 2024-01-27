import React from "react";
import { AuthWrapper } from "../AuthWrapper";
// import { UserAuthForm } from "@/app/examples/authentication/components/user-auth-form";

const Login = () => {
  return (
    <AuthWrapper mode="login">
      <div>Login Form</div>
    </AuthWrapper>
  );
};

export { Login };
