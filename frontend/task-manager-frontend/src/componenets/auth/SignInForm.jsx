import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignInForm() {
  return (
    <div>
      <ToastContainer />
      <h3>Welcome Back!</h3>
      <button onClick={() => toast.success("Toast is working!")}>
        Show Toast
      </button>
    </div>
  );
}
