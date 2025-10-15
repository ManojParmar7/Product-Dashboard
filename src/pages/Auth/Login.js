/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext/provider";
import { toast } from "react-toastify";

// Validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const success = login(data.email, data.password); // login function from context

      if (!success) {
        // Show error toast
        toast.error("Invalid email or password");
      }
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
          Welcome to{" "}
          <span className="text-blue-600 font-extrabold">
            Product Dashboard
          </span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          You only need to perform a simple action to log in to your account and
          access Product Dashboard.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Email"
                placeholder="Enter your email"
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

          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
            color="bg-blue-500 hover:bg-blue-600 text-white"
            className="w-full flex items-center justify-center text-center mt-6"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <div className="text-center text-sm mt-6 text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
