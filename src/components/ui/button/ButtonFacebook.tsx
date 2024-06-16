'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import FacebookIcon from "../icon/FacebookIcon";

const ButtonFacebook = () => {
    const router = useRouter();

    return (
        <Button className="bg-white text-black" onClick={ () => router.push('/api/auth/facebook')}>
            <FacebookIcon />
            Facebook
        </Button>
    );
}

export default ButtonFacebook;