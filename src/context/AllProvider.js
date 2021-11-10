import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AllContext = createContext();
const AllProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AllContext.Provider value={allContext}>{children}</AllContext.Provider>
  );
};

export default AllProvider;
