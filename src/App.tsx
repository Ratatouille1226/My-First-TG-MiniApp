function App() {
  window.Telegram?.WebApp?.ready();

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

  return (
    <div className="app">
      <h1>Привет {user?.first_name || "Гость"}!</h1>
    </div>
  );
}

export default App;
