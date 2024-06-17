'use client'

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/shadcn/form'
import { LoginHotelSchema } from '@/schemas/signin';
import InputEmail from '@/components/ui/input/InputEmail';
import InputPassword from '@/components/ui/input/InputPassword/InputPassword';
import { LoginButton } from '@/components/ui/auth/LoginButton';

export const FormSignIn = () => {

    const form = useForm<z.infer<typeof LoginHotelSchema>>({
        resolver: zodResolver(LoginHotelSchema),
        defaultValues: {
          email: '',
          password: '',
        }
    })


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(() => {})}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputEmail />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <InputPassword />
                <LoginButton />
            </form>
        </Form>
    )
};