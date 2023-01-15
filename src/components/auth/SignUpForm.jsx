import { Input } from '../Input';
import { createUser } from '../../config/firebase';
import { useState } from 'react';
import { MintFlow } from './MintFlow';
import { useUser } from '../../hooks/useUser';

export function SignUpForm() {
  const { user } = useUser();
  const [showMintView, setShowMintView] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { username, email, password } = e.target.elements;
    if ([username.value, email.value, password.value].includes('')) {
      alert('Please complete all fields');
      return;
    }
    if (username.value.includes(' ')) {
      alert('Username cannot contain spaces');
      return;
    }
    try {
      await createUser(username.value, email.value, password.value);
      setShowMintView(true);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      {user.uid || showMintView ? (
        <MintFlow />
      ) : (
        <form className="flex flex-col gap-1" onSubmit={handleSignUp}>
          <Input
            type="text"
            name="username"
            label="Username"
            placeholder="Username"
          />
          <Input
            type="email"
            name="email"
            label="Email address"
            placeholder="email@example.com"
          />
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="Secret Password"
          />
          <button
            className="bg-white text-black py-4 px-8 rounded font-semibold mt-4"
            type="submit"
          >
            Get started
          </button>
        </form>
      )}
    </div>
  );
}
