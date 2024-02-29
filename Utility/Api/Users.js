import { BaseUrl } from "./BaseUrl";

//---------------Sign Up-------------------//
export const SignUp = async (data) => {
  try {
    let result = await fetch(`${BaseUrl}/Users/Signup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//----------------Sign In---------------------//
export const SignIn = async (data) => {
  try {
    let result = await fetch(`${BaseUrl}/Users/Signin`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//------------------Otp Send-------------------//
export const OtpSend = async (data) => {
  try {
    let result = await fetch(`${BaseUrl}/Users/otp`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//------------------Forget Password-------------------//
export const ForgetPassword = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Users/ResetPassword`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        token: token,
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//------------------Forget Password-------------------//
export const GetProfile = async () => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Users/profile`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        token: token,
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//---------------------Update Profile------------------//
export const UpdateProfile = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Users/UpdateUser`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        token: token,
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//-------------------Get Analytices--------------------//

export const GetAnalytices = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Scan/Scan/getanalytices`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        token: token,
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//-----------------Contact us-----------------------//

export const Contactus = async (data) => {
  try {
    let result = await fetch(`${BaseUrl}/contact/CreateContact`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//----------------Get PLans-------------------------//

export const GetPlans = async () => {
  try {
    let result = await fetch(`${BaseUrl}/Plan/GetAllplan`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//-----------------Create Order------------------------//

export const CreateOrder = async (data) => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDVjZTc3NGMyYjE3ZTg0MTBhYmM5MyIsImlhdCI6MTcwOTE4OTg4MCwiZXhwIjoxNzExMjYzNDgwfQ.KbzC2_V69jCmfHn9FQrZd9pAnYsE2wejnAAJ13HFbW4";
  try {
    let result = await fetch(`${BaseUrl}/Suscription/Createorder`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        token: token,
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

export const PayOrder = async (data) => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDVjZTc3NGMyYjE3ZTg0MTBhYmM5MyIsImlhdCI6MTcwOTE4OTg4MCwiZXhwIjoxNzExMjYzNDgwfQ.KbzC2_V69jCmfHn9FQrZd9pAnYsE2wejnAAJ13HFbW4";
  try {
    let result = await fetch(`${BaseUrl}/Suscription/Pay`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        token: token,
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};
