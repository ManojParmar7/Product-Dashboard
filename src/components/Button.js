// import clsx from "clsx";
// import { ReactComponent as LoadingIcon } from "../components/Assets/loading.svg";

// export default function Button({
//   isLoading,
//   color,
//   className,
//   children,
//   startIcon,
//   disabled,
//   endIcon,
//   ...rest
// }) {
//   return (
//     <button
//       disabled={disabled || isLoading}
//       {...rest}
//       className={clsx(
//         color,
//         "flex h-10 items-center gap-2 rounded-md px-4 py-2 text-center text-sm font-normal transition-all duration-200",
//         className,
//         { "cursor-not-allowed opacity-50": disabled || isLoading }
//       )}
//     >
//       {startIcon && startIcon}
//       {isLoading && <LoadingIcon className="w-5 h-5" />}
//       {children}
//       {endIcon && endIcon}
//     </button>
//   );
// }
import clsx from "clsx";
import { ReactComponent as LoadingIcon } from "../components/Assets/loading.svg";

export default function Button({
  isLoading = false,
  color = "bg-blue-500 hover:bg-blue-600 text-white",
  size = "md", // new prop: sm, md, lg
  className,
  children,
  startIcon,
  endIcon,
  disabled,
  ...rest
}) {
  // Define size classes
  const sizeClasses = {
    sm: "h-8 text-sm px-3",
    md: "h-10 text-sm px-4",
    lg: "h-12 text-base px-6",
  };

  return (
    <button
      disabled={disabled || isLoading}
      {...rest}
      className={clsx(
        color,
        "flex items-center gap-2 rounded-md font-normal transition-all duration-200 justify-center",
        sizeClasses[size],
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
