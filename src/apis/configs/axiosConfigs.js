import axios from "axios";

export const api = axios.create({
    baseURL: "https://retoolapi.dev",
    headers: {
        "content-type": "application/json"
    }
});
