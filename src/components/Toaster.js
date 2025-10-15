import toast, { Toaster } from "react-hot-toast";

export const showToast = (message, type = "success") => {
  switch (type) {
    case "success":
      toast.success(message, { duration: 3000, position: "top-right" });
      break;
    case "error":
      toast.error(message, { duration: 3000, position: "top-right" });
      break;
    case "info":
      toast(message, { duration: 3000, position: "top-right" });
      break;
    default:
      toast(message, { duration: 3000, position: "top-right" });
  }
};

export const ToastContainer = () => <Toaster />;
