import ChitChat from "./components/ChitChat";
import Hover from "./components/Hover";
import { useState } from "react";
import Button from "./components/Button";
import Link from "./components/Link";

const CHAT = "chat";
const HOVER = "hover";
const BUTTON = "button";
const LINK = "link";

function App() {
  const [toggle, setToggle] = useState(CHAT);

  return (
    <div>
      <div className="flex bg-slate-500 space-x-4 h-16 items-center justify-center">
        <button onClick={() => setToggle(CHAT)}>Chat</button>
        <button onClick={() => setToggle(HOVER)}>Hover</button>
        <button onClick={() => setToggle(BUTTON)}>Button</button>
        <button onClick={() => setToggle(LINK)}>Link</button>
      </div>
      <div className="h-screen flex items-center justify-center bg-gray-200 ">
        {toggle === CHAT && <ChitChat />}
        {toggle === HOVER && <Hover />}
        {toggle === BUTTON && <Button />}
        {toggle === LINK && <Link />}
      </div>
    </div>
  );
}

export default App;
