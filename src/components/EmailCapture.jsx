import React, { useState } from 'react';

const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      // Mock submission for now; backend can be wired later
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="w-full">
      <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row sm:gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-900 placeholder-neutral-400 shadow-sm focus:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 px-5 py-3 text-base font-medium text-white transition hover:bg-neutral-800 active:bg-neutral-900 sm:w-auto"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-3 text-center text-sm text-emerald-600">Thanks! You're on the list.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-center text-sm text-red-600">Please enter a valid email and try again.</p>
      )}
    </section>
  );
};

export default EmailCapture;
