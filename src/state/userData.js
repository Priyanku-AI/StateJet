import { useStateGlobal } from "state-jet";

// global user state
export const userState = useStateGlobal("user", null);

// global token state
export const tokenState = useStateGlobal("token", null);
