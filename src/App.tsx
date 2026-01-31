function App() {
  window.Telegram?.WebApp?.ready();

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

  return (
    <div className="app">
      <h1>Привет {user?.first_name || "Гость"}!</h1>
      <h2>Ну и фотка у тебя конечно, шляпа какая то</h2>
      <img
        src={user?.photo_url || "https://placehold.co/100x100"}
        alt="Фото пользователя"
      />
    </div>
  );
}

export default App;
