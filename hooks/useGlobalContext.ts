import { useContext } from "react";
import { myContext } from "../Components/Context";
import { MyContextType } from "../types";

export default (): MyContextType => useContext(myContext);
