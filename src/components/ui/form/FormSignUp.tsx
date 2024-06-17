'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterButton } from '@/components/ui/auth/RegisterButton';
import  InputEmail from '@/components/ui/input/InputEmail';
import InputPassword from '@/components/ui/input/InputPassword/InputPassword';
import InputRepeatPassword from '@/components/ui/input/InputPassword/InputRepeatPassword';

export const FormSignUp = () => {
    return (
        <form action="/api/auth/register" method="post">
            <InputEmail />
            <InputPassword />
            <InputRepeatPassword />
            <RegisterButton />
        </form>
    )
};