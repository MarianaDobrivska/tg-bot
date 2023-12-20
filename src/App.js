import { useEffect } from "react";
import "./App.css";

let tg = window.Telegram.WebApp;

function App() {
  const user = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code}) ${tg.initDataUnsafe.user.id}`;

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <>
      <div className="App">{user}</div>
      <button onClick={onClose}>Close</button>
    </>
  );
}

export default App;
