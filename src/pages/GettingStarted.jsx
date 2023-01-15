import React, { useState } from 'react';
import { LogInForm } from '../components/auth/LoginForm';
import { SignUpForm } from '../components/auth/SignUpForm';
import { AvatarPicker } from '../components/getting_started/AvatarPicker';
import { useUser } from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const GettingStarted = () => {
    const { user } = useUser();
    const navigate = useNavigate()
    if (user.uid) {
        navigate('/me')
        return null
    }
    const [wantsToLogIn, setWantsToLogIn] = useState(false);

    return (
        <main className="relative min-h-screen bg-gradient-to-t from-violet-500 to-sky-500">
            <h1 className="text-[180px] absolute inset-x-0 mt-8 font-black text-center text-sky-300/40 z-0">
                NFTreasureHunt
            </h1>
            <div className={`flex mx-auto max-w-3xl items-start justify-between pt-48 relative z-10 ${wantsToLogIn ? `translate-x-1/4` : ``}`}>
                {!wantsToLogIn ? <AvatarPicker /> : null}
                <div className={"w-1/2 mt-10"}>
                    {wantsToLogIn ? <LogInForm /> : <SignUpForm />}
                    {!user.uid && (
                        <button
                            className="text-white mx-auto block my-2"
                            onClick={() => setWantsToLogIn(!wantsToLogIn)}
                        >
                            {wantsToLogIn ? 'Sign Up instead?' : 'Already have an account?'}
                        </button>
                    )}
                </div>
            </div>
        </main>
    );
};

export default GettingStarted;
