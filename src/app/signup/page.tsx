"use client";

import { RegisterButton } from '@/components/ui/auth/RegisterButton';
import  FormEmail from '@/components/ui/forms/FormEmail';
import FormPassword from '@/components/ui/forms/FormPassword/FormPassword';
import FormRepeatPassword from '@/components/ui/forms/FormPassword/FormRepeatPassword';

const SignUp = () => {
  return (
    <main className="flex flex-col w-full h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-900">
      <div className="space-y-6 py-24 text-center">
        <h1 className="text-5xl font-semibold text-white drop-shadow-md">
          🔐 Sign Up
        </h1>
        <p className="text-sm"> Already have an account? - <a className="font-semibold hover:text-black" href="/signin">
          Sign in.</a>
        </p>
        <div>
          <FormEmail />
          <FormPassword />
          <FormRepeatPassword />
          <RegisterButton />
        </div>
      </div>
    </main>
  );
}

export default SignUp;
