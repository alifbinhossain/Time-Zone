import { useContext } from "react";
import { AllContext } from "../context/AllProvider";

const useAll = () => {
  return useContext(AllContext);
};

export default useAll;
