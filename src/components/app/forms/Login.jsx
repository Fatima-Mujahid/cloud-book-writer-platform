import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthWrapper } from "../AuthWrapper";
import { cn } from "@/lib/utils";
import { FaSpinner } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <AuthWrapper mode="login">
      <div className={cn("grid gap-6")}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-[20px]">
            <div className="grid gap-2">
              <Label htmlFor="email">
                Email<span className="asterisk">*</span>
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="error">Please enter valid email.</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">
                Password<span className="asterisk">*</span>
              </Label>
              <Input
                id="password"
                placeholder="Password"
                type="password"
                disabled={isLoading}
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password && (
                <p className="error">
                  Please enter password with minimum 8 characters.
                </p>
              )}
            </div>
            <Button disabled={isLoading}>
              {isLoading && <FaSpinner className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
};

export { Login };
