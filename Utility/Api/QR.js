import { BaseUrl } from "./BaseUrl";

//--------------------WEBSITE------------------------------//
//----------------Create Qr-----------------------//

export const CreateWebsiteQr = async (data) => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDVjZTc3NGMyYjE3ZTg0MTBhYmM5MyIsImlhdCI6MTcwOTE4OTg4MCwiZXhwIjoxNzExMjYzNDgwfQ.KbzC2_V69jCmfHn9FQrZd9pAnYsE2wejnAAJ13HFbW4";

  try {
    let result = await fetch(`${BaseUrl}/Qr/Websiteurl/Create`, {
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

//----------------Update Qr----------------------//

export const UpdateWebsiteQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Qr/Websiteurl/update`, {
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

export const UpdateWebsiteQrImage = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Qr/Websiteurl/update/Images`, {
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

//--------------------Delete Qr----------------//

export const DeleteWebsiteQr = async (id) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Qr/Websiteurl/DeleteQr/${id}`, {
      method: "DELETE",
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

//--------------------------------PLAYSTORE----------------------------------------------//
//----------------Create Qr-----------------------//

export const CreatePlayStoreQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/PlayStore/PlayStore/Create`, {
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

//----------------Update Qr----------------------//

export const UpdatePlayStoreQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/PlayStore/PlayStore/update`, {
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

export const UpdatePlayStoreQrImages = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/PlayStore/PlayStore/update/Images`, {
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

//--------------------Delete Qr----------------//

export const DeletePlayStoreQr = async (id) => {
  console.log(id);
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/PlayStore/PlayStore/DeleteQr/${id}`, {
      method: "DELETE",
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

//--------------------------------Audio----------------------------------------------//
//----------------Create Qr-----------------------//

export const CreateAudioQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/audioQr/Audio/Create`, {
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

//----------------Update Qr----------------------//

export const UpdateAudioQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/audioQr/Audio/update`, {
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

export const UpdateAudioQrImages = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/audioQr/Audio/update/Images`, {
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
//--------------------Delete Qr----------------//

export const DeleteAudioQr = async (id) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/audioQr/Audio/DeleteQr/${id}`, {
      method: "DELETE",
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

//--------------------------------Video----------------------------------------------//
//----------------Create Qr-----------------------//

export const CreateVideoQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/VideoQr/Video/Create`, {
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

//----------------Update Qr----------------------//

export const UpdateVideoQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/VideoQr/Video/update`, {
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

export const UpdateVideoQrImages = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/VideoQr/Video/update/Images`, {
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

//--------------------Delete Qr----------------//

export const DeleteVideoQr = async (id) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/VideoQr/Video/DeleteQr/${id}`, {
      method: "DELETE",
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

//--------------------------------Document----------------------------------------------//
//----------------Create Qr-----------------------//

export const CreateDocumentQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/document/document/Create`, {
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

//----------------Update Qr----------------------//

export const UpdateDocumentQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/document/document/update`, {
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

export const UpdateDocumentQrImages = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/document/document/update/Images`, {
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
//--------------------Delete Qr----------------//

export const DeletedocumentQr = async (id) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/document/document/DeleteQr/${id}`, {
      method: "DELETE",
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

//--------------------------------Images----------------------------------------------//
//----------------Create Qr-----------------------//

export const CreateImageQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/ImageQr/Image/Create`, {
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

//----------------Update Qr----------------------//

export const UpdateImageQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/ImageQr/Image/update`, {
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

export const UpdateImageQrImages = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/ImageQr/Image/update/Images`, {
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

//--------------------Delete Qr----------------//

export const DeleteImageQr = async (id) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/ImageQr/Image/DeleteQr/${id}`, {
      method: "DELETE",
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

//--------------------------------SocialMedia----------------------------------------------//
//----------------Create Qr-----------------------//

export const CreateSocialQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/socialmedia/SocialMediaurl/Create`, {
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

//----------------Update Qr----------------------//

export const UpdateSocialQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/socialmedia/SocialMediaurl/update`, {
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

export const UpdateSocialQrImages = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(
      `${BaseUrl}/socialmedia/SocialMediaurl/update/Images`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
          token: token,
        },
      }
    );
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};
//--------------------Delete Qr----------------//

export const DeleteSocialQr = async (id) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(
      `${BaseUrl}/socialmedia/SocialMediaurl/DeleteQr/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          token: token,
        },
      }
    );
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//--------------------------------MAP----------------------------------------------//
//----------------Create Qr-----------------------//

export const CreateMapQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Map/Googlemap/Create`, {
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

//----------------Update Qr----------------------//

export const UpdateMapQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Map/Googlemap/update`, {
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

export const UpdateMapQrImages = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Map/Googlemap/update/Images`, {
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

//--------------------Delete Qr----------------//

export const DeleteMapQr = async (id) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Map/Googlemap/DeleteQr/${id}`, {
      method: "DELETE",
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
