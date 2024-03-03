import React from "react";
import AuthLayout from "@/components/AuthLayout";
import Login from "@/components/Login";
function page() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}

export default page;
