import "./App.css";

let tg = window.Telegram.WebApp;

function App() {
  const user = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
  return <div className="App">{user}</div>;
}

export default App;
