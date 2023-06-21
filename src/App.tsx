import { app, card } from "./app.css";

import Header from "./Header/Header";
import Counter from "./Counter/Counter";

export default function App() {
  return (
    <article className={app}>
      <Header />

      <main>
        <div className={card}>
          <Counter accent="neutral" size="small" onClick={console.log} />
          <Counter accent="neutral" />
          <Counter accent="neutral" size="large" />

          <hr />

          <Counter accent="brand" size="small" />
          <Counter accent="brand" />
          <Counter accent="brand" size="large" />

          <hr />

          <Counter accent="reverse" size="small" />
          <Counter accent="reverse" />
          <Counter accent="reverse" size="large" />
        </div>
      </main>
    </article>
  );
}
