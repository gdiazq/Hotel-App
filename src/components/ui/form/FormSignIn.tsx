'use client'

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputEmail from '@/components/ui/input/InputEmail';
import InputPassword from '@/components/ui/input/InputPassword/InputPassword';
import { LoginButton } from '@/components/ui/auth/LoginButton';
import { LoginHotelSchema } from '@/schemas/signin';

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginHotelSchema>>({
        resolver: zodResolver(LoginHotelSchema),

    });
};


export const FormSignIn = () => {
    return (
        <form action="/api/auth/username" method="post">
            <InputEmail />
            <InputPassword />
            <LoginButton />
        </form>
    )
};