import { useContext } from "react";
import Theme from "./components/Theme";
import { AppContext } from "./context/AppContext";
import "./styles.css";

function Home() {
  const { theme } = useContext(AppContext);

  console.log(theme);
  const styles = {
    dark: {
      background: "black",
      color: "white",
      height: "100vh",
      margin: "0px"
    },
    light: {
      background: "white",
      color: "black",
      height: "100vh",
      margin: "0px"
    }
  };
  return (
    <div className="App" style={styles[theme]}>
      <Theme />
    </div>
  );
}

export default Home;
