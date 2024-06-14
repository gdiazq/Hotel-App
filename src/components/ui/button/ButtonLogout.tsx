'use client'

import React from "react";
import {Button} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const ButtonLogout = () => {
    const router = useRouter();
    
    return (
        <Button className="bg-red-700 text-white" onClick={ () => router.push('/')}>
            Logout
        </Button>
    );
}

export default ButtonLogout;