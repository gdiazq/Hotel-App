"use server";

import * as z from 'zod';
import { LoginHotelSchema } from '@/schemas/signin';

export const login = async (values: z.infer<typeof LoginHotelSchema>) => {
    const validatedFields = LoginHotelSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid credentials" };
    }
    
    return { success: "Login success" };
};