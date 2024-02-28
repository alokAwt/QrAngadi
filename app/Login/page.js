import React from "react";
import AuthLayout from "@/Components/AuthLayout";
import Login from "@/Components/Login";
function page() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}

export default page;
