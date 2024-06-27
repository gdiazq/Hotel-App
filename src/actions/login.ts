"use server";

import * as z from 'zod';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth'
import { LoginHotelSchema } from '@/schemas/signin';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const login = async (provider: "credentials" | "google" | "github" | "facebook", values: z.infer<typeof LoginHotelSchema>) => {
    const validatedFields = LoginHotelSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid credentials" };
    }
    
    const { email, password } = validatedFields.data;
    try {
        switch(provider) {
            case "credentials":
                return await signIn("credentials", {
                    email,
                    password,
                    redirectTo: DEFAULT_LOGIN_REDIRECT,
                });
            case "google":
                return await signIn("google", {
                    email,
                    password,
                    redirectTo: DEFAULT_LOGIN_REDIRECT,
                });
            case "github":
                return await signIn("github", {
                    email,
                    password,
                    redirectTo: DEFAULT_LOGIN_REDIRECT,
                });
            case "facebook":
                return await signIn("facebook", {
                    email,
                    password,
                    redirectTo: DEFAULT_LOGIN_REDIRECT,
                });
            default:
                return { error: "Invalid provider" };
        }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" };
                default:
                    return { error: "An error occurred" };
            }
        }
        throw error;
    }

};