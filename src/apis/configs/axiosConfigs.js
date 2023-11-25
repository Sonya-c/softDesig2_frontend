import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});
