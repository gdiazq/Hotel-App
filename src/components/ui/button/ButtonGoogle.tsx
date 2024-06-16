'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import GoogleIcon from "../icon/GoogleIcon";

const ButtonGoogle = () => {
    const router = useRouter();

    return (
        <Button className="bg-white text-black" onClick={ () => router.push('/api/auth/google' )}>
            <GoogleIcon />
            Google
        </Button>
    );
}

export default ButtonGoogle;