import { createContext } from "react";

export const AlertContext = createContext<{ alert: string[]; setAlert: any }>({
  alert: [],
  setAlert: "",
});
