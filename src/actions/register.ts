"use server";

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import * as z from 'zod';
import { RegisterHotelSchema  } from '@/schemas/signup';

export const register = async (values: z.infer<typeof RegisterHotelSchema>) => {
    const validatedFields = RegisterHotelSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { name, email, password, repeatpassword } = validatedFields.data;
    if (password !== repeatpassword) {
        return { error: "Password do not match!" };
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })
    return { success: "Register success" };
}