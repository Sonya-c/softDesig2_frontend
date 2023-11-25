import { api } from "./configs/axiosConfigs";

const url = "/users";

export const UsersApi = {
  getAll: async () => {
    const response = await api.request({
      method: 'GET',
      url: url
    });

    console.info("UsersApi.getAll", response);

    return response.data;
  },

  getById: async (doc, docType) => {
    const response = await api.request({
      method: 'GET',
      url: url + `?doc=${doc}&docType=${docType}`
    });

    console.info("UsersApi.getById", response);

    return response.data;
  },

  create: async (user, profileImage) => {
    const response = await api.request({
      method: 'POST',
      url: url,
      data: user
    });

    console.info("UsersApi.create", response);
  },

  update: async (user) => {

    let response = await api.request({
      method: 'GET',
      url: url,
      data: user
    });

    console.info("UsersApi.update", response);
  },

  delete: async (doc, docType) => {
    let response = await api.request({
      method: 'GET',
      url: url + `?gov_id=${doc}&id_type=${docType}`
    });

    console.info("UsersApi.delete", response);
  },

  uploadImage: async (doc, docType, profileImage) => {
    if (profileImage === null || profileImage === undefined) return;

    const formData = new FormData();
    formData.append('profile_image', profileImage);

    const response = await api.request({
      method: 'PATCH', // patch
      url: `image?doc=${doc}&docType=${docType}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'accept': 'application/json',
      },
    });

    console.log("UsersApi.uploadImage", response);
  }
}