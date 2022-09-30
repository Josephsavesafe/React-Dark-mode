import { useContext } from "react";
import { ThemeContext } from "../App";
import light from "../image/light.svg";
import dark from "../image/dark.svg";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <div>
        <h1>Myname is Joseph</h1>
        <p>Darkmode Workshop</p>
      </div>
      <img src={theme === "dark" ? dark : light} alt="logo" />
    </main>
  );
};

export default Content;
