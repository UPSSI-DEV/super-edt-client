import Pocketbase from "pocketbase";
import { api_host } from "../config.json";

const pocketbase = new Pocketbase(api_host);

export const usePocketbase = () => {
  return pocketbase;
};
