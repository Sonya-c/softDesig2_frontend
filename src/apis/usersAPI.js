import { api } from "./configs/axiosConfigs";

import { toUserData, fromUserData } from "../utils/utils";

const url = "/YCmzCw/users";

export const UsersApi = {
  getAll: async () => {
    const response = await api.request({
      method: 'GET',
      url: url
    });

    console.info("UsersApi.getAll", response);

    return response.data.map((row) => {
      return toUserData(row);
    });
  },
  getById: async (doc, docType) => {
    const response = await api.request({
      method: 'GET',
      url: `${url}?gov_id=${doc}&id_type=${docType}`
    });

    console.info("UsersApi.getById", response);

    return (response.data.length > 0) ? toUserData(response.data[0]) : response.data;
  },
  create: async (user) => {
    const response = await api.request({
      method: 'POST',
      url: url,
      data: fromUserData(user)
    });

    console.info("UsersApi.create", response);
  },
  update: async (user) => {
    console.log(`${url}?gov_id=${user.doc}&id_type=${user.docType}`);
    let response = await api.request({
      method: 'GET',
      url: `${url}?gov_id=${user.doc}&id_type=${user.docType}`
    });

    response = await api.request({
      method: 'PUT',
      url: `${url}/${response.data[0].id}`,
      data: fromUserData(user)
    });

    console.info("UsersApi.update", response.data);
  },

  delete: async (doc, docType) => {
    let response = await api.request({
      method: 'GET',
      url: `${url}?gov_id=${doc}&id_type=${docType}`
    });

    response = await api.request({
      method: 'DELETE',
      url: `${url}/${response.data[0].id}`,
    });

    console.info("UsersApi.delete", response);
  }
}