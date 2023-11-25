import { api } from "./configs/axiosConfigs";

const url = "/logs";

export const LogsApi = {
  getAll: async () => {
    const response = await api.request({
      method: 'GET',
      url: url
    });

    console.info("LogsApi.getAll", response);

    return response.data;
  },


  getBy: async (doc, type, date) => {

    const response = await api.request({
      method: 'GET',
      url: `${url}` +
        `${(doc || type || date) && "?"}` +
        `${doc && "doc=" + doc}` +
        `${doc && type && "&"}` +
        `${type && "type=" + type}` +
        `${type && date && "&"}` +
        `${date && "date=" + date}`
    });

    console.info("LogsApi.getBy", response);

    return response.data;
  },


  delete: async (doc, type, date) => {
    const response = await api.request({
      method: 'DELETE',
      url: `${url}` +
        `${(doc || type || date) && "?"}` +
        `${doc && "doc=" + doc}` +
        `${doc && type && "&"}` +
        `${type && "type=" + type}` +
        `${type && date && "&"}` +
        `${date && "date=" + date}`
    });

    console.info("LogsApi.getBy", response);

    return response.data;
  }
}