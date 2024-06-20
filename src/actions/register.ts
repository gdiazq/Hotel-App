"use server";
import { db } from '@/lib/db';
import bcrypt from 'bcrypt';
import * as z from 'zod';
import { RegisterHotelSchema  } from '@/schemas/signup';

export const register = async (values: z.infer<typeof RegisterHotelSchema>) => {
    const validatedFields = RegisterHotelSchema.safeParse(values);
    if (validatedFields.success) {
        const { email, password, repeatpassword } = validatedFields.data;
        const hashedPassword = await bcrypt.hash(password, 10);
        const hashedRepeatPassword = await bcrypt.hash(repeatpassword, 10);
        const existingUser = await db.user.findUnique({
            where: {
                email
            }
        });
        if (existingUser) {
            return { error: "User already exists" };
        }

        await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                repeatpassword: hashedRepeatPassword,
            }
        })
        return { success: "Register success" };
    } else {
        return { error: "Invalid credentials" };
    }
}