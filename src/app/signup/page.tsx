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
        <p className="text-xs">Or with</p>
        <div className="flex flex-row gap-x-4">
          <form action="/api/auth/google" method="POST">
            <input type="hidden" name="auth-google" value="google" />
            <button className="bg-[#DB4437] text-white px-4 py-2 rounded-md">Google</button>
          </form>
          <form action="/api/auth/facebook" method="POST">
            <input type="hidden" name="auth-facebook" value="facebook" />
            <button className="bg-[#1877F2] text-white px-4 py-2 rounded-md">Facebook</button>
          </form>
          <form action="/api/auth/github" method="POST">
            <input type="hidden" name="auth-github" value="github" />
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Github</button>
            </form>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
