import { useState, useCallback } from "react";
import reactLogo from "./../assets/react.svg";
import viteLogo from "./../assets/vite.svg";

import { vite, react } from "./header.css";

export default function Header() {
  return (
    <header>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className={react} alt="React logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className={vite} alt="Vite logo" />
      </a>
      <h1>React + Vite</h1>
    </header>
  );
}
