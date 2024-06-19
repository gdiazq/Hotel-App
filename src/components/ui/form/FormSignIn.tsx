'use client'

import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/shadcn/form'
import { LoginHotelSchema } from '@/schemas/signin';
import InputEmail from '@/components/ui/input/InputEmail';
import InputPassword from '@/components/ui/input/InputPassword/InputPassword';
import { LoginButton } from '@/components/ui/auth/LoginButton';
import { FormError } from '@/components/ui/form/formError';
import { FormSuccess } from '@/components/ui/form/formSuccess';
import { login } from '@/actions/login';

export const FormSignIn = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof LoginHotelSchema>>({
        resolver: zodResolver(LoginHotelSchema),
        defaultValues: {
          email: '',
          password: '',
        }
    })

    const onSubmit = (values: z.infer<typeof LoginHotelSchema>) => {
        setError("");
        setSuccess("");
        login(values)
            .then((response) => {
                setError(response.error);
                setSuccess(response.success);
            })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputEmail />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputPassword />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormError message={error} />
                <FormSuccess message={success}/>
                <LoginButton />
            </form>
        </Form>
    )
};