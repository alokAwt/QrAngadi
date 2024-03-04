"use client";
import React from "react";
import AuthLayout from "@/components/AuthLayout";
import SignUp from "@/components/SignUp";
function page() {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
}

export default page;
