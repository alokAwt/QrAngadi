import { BaseUrl } from "./BaseUrl";

export const sendDataToServer = async (data) => {
  let token = localStorage.getItem("token");

  fetch(`${BaseUrl}/Gamification/game/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to send data to the server");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
