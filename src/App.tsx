import { app } from './app.css'
import { Break, Card, Counter, Header, Link } from './components'

export default function App() {
  return (
    <article className={app}>
      <Header />

      <Link href="/">Hello!</Link>

      <main>
        <Card>
          <Counter accent="neutral" size="small" />
          <Counter accent="neutral" />
          <Counter accent="neutral" size="large" />
        </Card>

        <Break />

        <Card>
          <Counter accent="brand" size="small" />
          <Counter accent="brand" />
          <Counter accent="brand" size="large" />
        </Card>

        <Break />

        <Card>
          <Counter accent="reverse" size="small" />
          <Counter accent="reverse" />
          <Counter accent="reverse" size="large" />
        </Card>
      </main>
    </article>
  )
}
