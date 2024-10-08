import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
