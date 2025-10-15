import clsx from "clsx";
import { ReactComponent as LoadingIcon } from "../components/Assets/loading.svg";
export default function Button({
  isLoading = false,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  startIcon,
  endIcon,
  disabled,
  ...rest
}) {
  const sizeClasses = {
    sm: "h-8 text-sm px-3",
    md: "h-10 text-sm px-4",
    lg: "h-12 text-base px-6",
  };

  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-green-600 hover:bg-green-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    gray: "bg-gray-500 hover:bg-gray-600 text-white",
  };

  return (
    <button
      disabled={disabled || isLoading}
      {...rest}
      className={clsx(
        variantClasses[variant],
        "flex items-center gap-2 rounded-md font-normal transition-all duration-200 justify-center",
        sizeClasses[size],
        fullWidth && "w-full",
        className,
        { "cursor-not-allowed opacity-50": disabled || isLoading }
      )}
    >
      {startIcon && startIcon}
      {isLoading && (
        <LoadingIcon className={clsx(size === "sm" ? "w-4 h-4" : "w-5 h-5")} />
      )}
      {children}
      {endIcon && endIcon}
    </button>
  );
}
