import { logout } from "@/actions/logout";
import React from "react";
import {Button} from "@nextui-org/react";

const ButtonLogout = async () => {
    
    return (
        <form action = { async () => {
            logout();
        }}>
            <Button className="bg-red-700 text-white">
                Logout
            </Button>
        </form>
    );
}

export default ButtonLogout;