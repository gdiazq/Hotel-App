'use client'

import { LoginButton } from '@/components/ui/auth/LoginButton';

const SignIn = () => {
    return (
        <main className="flex flex-col w-full h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-900">
            <div className="space-y-6 py-24 text-center">
                <h1 className="text-5xl font-semibold text-white drop-shadow-md">
                    🔐 Auth
                </h1>
                <p className="text-white text-lg">
                    A simple authentication page
                </p>
                <div>
                    <LoginButton />
                </div>
            </div>
        </main>
    );
}

export default SignIn;