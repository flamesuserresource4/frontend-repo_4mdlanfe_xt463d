import React from 'react';
import HeroVideo from './components/HeroVideo';
import EmailCapture from './components/EmailCapture';
import ComingSoon from './components/ComingSoon';
import Benefits from './components/Benefits';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-50 text-neutral-900">
      <header className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-8">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">Studio Robinia</div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-16">
        {/* Video */}
        <HeroVideo />

        {/* Desktop layout: email + coming soon immediately under video, then benefits */}
        <div className="mt-8 hidden sm:block space-y-8">
          <EmailCapture />
          <ComingSoon />
          <Benefits />
        </div>

        {/* Mobile layout: email + coming soon, then benefits under that */}
        <div className="mt-6 space-y-6 sm:hidden">
          <EmailCapture />
          <ComingSoon />
          <Benefits />
        </div>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Studio Robinia. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
