import { Input } from '../Input';
import { signInUser } from '../../config/firebase';

export function LogInForm() {
  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    if ([email.value, password.value].includes('')) {
      alert('Please complete all fields');
      return;
    }
    try {
      await signInUser(email.value, password.value);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form className="flex flex-col gap-1" onSubmit={handleSignIn}>
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
        Continue
      </button>
    </form>
  );
}
