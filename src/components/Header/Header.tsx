import { title, react, vite } from './header.css'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import Link from '../Link/Link'

export default function Header() {
  return (
    <header>
      <Link href="https://reactjs.org" target="_blank">
        <img className={react} alt="React logo" src={reactLogo} />
      </Link>
      <Link href="https://vitejs.dev" target="_blank">
        <img className={vite} alt="Vite logo" src={viteLogo} />
      </Link>
      <h1 className={title}>React + Vite</h1>
    </header>
  )
}
