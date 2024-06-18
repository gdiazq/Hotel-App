'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/shadcn/form'
import { RegisterButton } from '@/components/ui/auth/RegisterButton';
import { RegisterHotelSchema } from '@/schemas/signup';
import  InputEmail from '@/components/ui/input/InputEmail';
import InputPassword from '@/components/ui/input/InputPassword/InputPassword';
import InputRepeatPassword from '@/components/ui/input/InputPassword/InputRepeatPassword';

export const FormSignUp = () => {

    const form = useForm<z.infer<typeof RegisterHotelSchema>>({
        resolver: zodResolver(RegisterHotelSchema),
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
                <InputRepeatPassword />
                <RegisterButton />
            </form>
        </Form>
    )
};