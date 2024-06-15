"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const LoginButton = () => {
    const router = useRouter();

    return (
        <Button onClick={ () => router.push('/')} className="text-base bg-white cursor-pointer">
            Login
        </Button>
    )
}