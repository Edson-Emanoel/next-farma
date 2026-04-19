"use client";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

export function AppToastProvider() {
  return (
    <ToastContainer
      autoClose={2400}
      closeButton={false}
      hideProgressBar
      newestOnTop
      pauseOnFocusLoss={false}
      position="top-right"
      theme="dark"
      toastClassName="!rounded-2xl !border !border-white/10 !bg-[#0b1821] !text-white"
    />
  );
}
