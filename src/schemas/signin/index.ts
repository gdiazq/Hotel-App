import { z } from 'zod';

export const LoginHotelSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

