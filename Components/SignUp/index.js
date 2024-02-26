import React from "react";
import Link from "next/link";
function SignUp() {
  return (
    <div>
      Sign up
      <Link href={"/Login"}>Login</Link>
    </div>
  );
}

export default SignUp;
