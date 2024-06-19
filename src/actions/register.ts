"use server";

import * as z from 'zod';
import { RegisterHotelSchema  } from '@/schemas/signup';

export const register = async (values: z.infer<typeof RegisterHotelSchema>) => {
    const validatedFields = RegisterHotelSchema.safeParse(values);
    if (validatedFields.success) {
        return { success: "Register success" };
    } else {
        return { error: "Invalid credentials" };
    }
}