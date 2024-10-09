import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import ClockMoto from "./components/ClockMoto";
import CurrentTime from "./components/current";
import "bootstrap/dist/css/bootstrap.min.css";
import Background from "./components/Background";

function App() {
  return (
    <Background>
      <AppName />
      <ClockMoto />
      <CurrentTime />
    </Background>
  );
}

export default App;
