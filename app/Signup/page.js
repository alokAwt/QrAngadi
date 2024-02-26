"use client";
import React from "react";
import AuthLayout from "@/Components/AuthLayout";
import SignUp from "@/Components/SignUp";
function page() {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
}

export default page;
