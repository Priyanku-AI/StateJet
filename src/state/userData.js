import { useStateGlobal } from "state-jet";

// global user state
export const userState = useStateGlobal("user", null, {persist: true});

// global token state
export const tokenState = useStateGlobal("token", null, {persist: true});
