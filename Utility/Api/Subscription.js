import { BaseUrl } from "./BaseUrl";



//GET SUBSCRIPTION

export const Getsubscription = async () => {
    let token = localStorage.getItem("token");
    try {
      let result = await fetch(`${BaseUrl}/Suscription/GetOwnSub`, {
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