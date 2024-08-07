'use client'

import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/shadcn/form';
import { LoginHotelSchema } from '@/schemas/signin';
import { Input } from "@/components/shadcn/input";
import { LoginButton } from '@/components/ui/auth/LoginButton';
import { FormError } from '@/components/ui/form/formError';
import { FormSuccess } from '@/components/ui/form/formSuccess';
import { login } from '@/actions/login';

export const FormSignIn = ({ searchParams }: { searchParams: URLSearchParams }) => {
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
        ? "Email already in use in other provider!"
        : "";

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof LoginHotelSchema>>({
        resolver: zodResolver(LoginHotelSchema),
        defaultValues: {
          email: '',
          password: '',
        }
    })

    const loginSubmit = (values: z.infer<typeof LoginHotelSchema>) => {
        setError("");
        setSuccess("");
        login(values)
            .then((response: { error: string; success?: string } | undefined) => {
                if (response?.error) {
                    form.reset();
                    setError(response.error);
                }
                if (response?.success){
                    form.reset();
                    setSuccess(response.success);
                }
            })
            .catch(() => setError("Something went wrong!"));
    }

    return (
        <Form {...form}>
            <form method="post" onSubmit={form.handleSubmit(loginSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <label>Email</label>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="max-w-xs mx-auto text-black"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <label>Password</label>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="max-w-xs pt-2 mx-auto text-black"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <FormSuccess message={success}/>
                <FormError message={error || urlError} />
                <LoginButton />
            </form>
        </Form>
    )
};