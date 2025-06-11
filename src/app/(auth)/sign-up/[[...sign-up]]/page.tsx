'use client';

import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
};

/**
 * Renders the Sign Up page for user registration.
 *
 * This component is the default export for the sign-up route and is responsible
 * for displaying the user interface and handling logic related to creating a new account.
 *
 * @component
 * @returns {JSX.Element} The rendered sign-up page.
 */
export default SignUpPage;
