const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">DailyForge</h1>
      <p className="mt-4 text-lg">
        Build routines. Forge habits. Own your week.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="/login">
          <button>Login</button>
        </a>

        <a href="/signup">
          <button>Get Started</button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
