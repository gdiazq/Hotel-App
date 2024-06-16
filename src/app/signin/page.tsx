'use client'

import { LoginButton } from '@/components/ui/auth/LoginButton';
import  FormEmail from '@/components/ui/input/InputEmail';
import FormPassword from '@/components/ui/input/InputPassword/InputPassword';
import ButtonGoogle from '@/components/ui/button/ButtonGoogle';
import ButtonFacebook from '@/components/ui/button/ButtonFacebook';
import ButtonGithub from '@/components/ui/button/ButtonGithub';

const SignIn = () => {
    return (
        <main className="flex flex-col w-full h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-900">
            <div className="space-y-6 py-24 text-center px-4">
                <h1 className="text-5xl font-semibold text-white drop-shadow-md">
                    🔐 Sign In
                </h1>
                <p className="text-sm text-white"> New in HotelApp - <a className="font-semibold hover:text-black" href="/signup"> 
                    Sign up for an account</a>
                </p>
                <div>
                    <form>
                        <FormEmail />
                        <FormPassword />
                        <LoginButton />
                    </form>
                </div>
                <p className="text-xs text-white">Or with</p>
                <div className="flex flex-row gap-x-4">
                    <form action="/api/auth/google" method="POST">
                        <input type="hidden" name="auth-google" value="google" />
                        <ButtonGoogle/>
                    </form>
                    <form action="/api/auth/facebook" method="POST">
                        <input type="hidden" name="auth-facebook" value="facebook" />
                        <ButtonFacebook />
                    </form>
                    <form action="/api/auth/github" method="POST">
                        <input type="hidden" name="auth-github" value="github" />
                        <ButtonGithub />
                    </form>
                </div>
            </div>
        </main>
    );
}

export default SignIn;