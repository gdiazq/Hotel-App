'use client'

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
 } from '@/components/ui/form';

import InputEmail from '@/components/ui/input/InputEmail';
import InputPassword from '@/components/ui/input/InputPassword/InputPassword';
import { LoginButton } from '@/components/ui/auth/LoginButton';
import { LoginHotelSchema } from '@/schemas/signin';

export const FormSignIn = () => {
    const form = useForm<z.infer<typeof LoginHotelSchema>>({
        resolver: zodResolver(LoginHotelSchema),
        defaultValues: {
            email: "",
            password: "",
        },

    });

    return (
        <form action="/api/auth/username" method="post">
            <InputEmail />
            <InputPassword />
            <LoginButton />
        </form>
    )
};