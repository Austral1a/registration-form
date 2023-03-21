import { RegistrationForm } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h2 className="title">Registration</h2>
      </header>

      <main>
        <RegistrationForm />
      </main>
    </div>
  );
}

export default App;
