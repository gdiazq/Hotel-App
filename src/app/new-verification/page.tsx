"use client";

import { useCallback, useEffect } from 'react';
import { BeatLoader} from 'react-spinners';
import { useSearchParams } from 'next/navigation';

const NewVerificationPage = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        console.log(token);
    }, [token]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (

        <main className="flex flex-col w-full h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-900">
            <div className="space-y-6 py-24 text-center px-4">
                <h1 className="text-5xl font-semibold text-white drop-shadow-md">✅ New Verification!</h1>
                <BeatLoader />
                <div>
                    <p className="text-xs text-white"><a href="/signin">Back to login</a></p>
                </div>
            </div>
        </main>  
    );
}

export default NewVerificationPage;