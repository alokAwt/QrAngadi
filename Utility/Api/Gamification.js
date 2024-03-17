import { BaseUrl } from "./BaseUrl";

export const sendDataToServer = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Gamification/game/create`, {
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



export const Getgames = async (id) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Gamification${id}`, {
      method: "POST",
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



export const Savedgames = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Gamification`, {
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
