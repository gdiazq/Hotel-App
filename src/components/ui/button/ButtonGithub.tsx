'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import GithubIcon from "../icon/GithubIcon";

const ButtonGithub = () => {
    const router = useRouter();

    return (
        <Button className="bg-white text-black" onClick={ () => router.push('/api/auth/github')}>
            <GithubIcon />
            Github
        </Button>
    );
}

export default ButtonGithub;