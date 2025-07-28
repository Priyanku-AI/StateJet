import { useStateGlobal } from "state-jet";

export const userState = useStateGlobal(
    {
        "user": null,
        "token": null,
    }
);