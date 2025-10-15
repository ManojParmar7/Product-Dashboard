/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext/provider";
import { toast } from "react-toastify";

const signUpSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useContext(AuthContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const success = signup({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      if (!success) return;
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Sign Up
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Create your account to access Product Management
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Username"
                placeholder="Enter your username"
                error={errors.username?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Email"
                placeholder="Enter your email"
                type="email"
                error={errors.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Password"
                placeholder="Enter your password"
                type="password"
                error={errors.password?.message}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
                error={errors.confirmPassword?.message}
              />
            )}
          />

          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            color="bg-blue-500 hover:bg-blue-600 text-white"
            className="w-full flex items-center justify-center text-center mt-6"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
