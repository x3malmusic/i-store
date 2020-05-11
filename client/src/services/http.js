import axios from "axios";
import { URL } from "../config";

const http = axios.create({
  baseURL: URL,
  timeout: 4000,
  withCredentials: true,
});

export default http;
