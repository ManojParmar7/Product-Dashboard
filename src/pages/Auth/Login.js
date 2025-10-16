import React, { useState, useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext/provider";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const success = login(data.username, data.password);

      if (success) {
        navigate("/products");
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
          <Link
            to="/signup"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
