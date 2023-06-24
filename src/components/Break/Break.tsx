import { horizontalRule } from './break.css'

export type BreakProps = {
  className?: string
}

export default function Break({ className = horizontalRule }: BreakProps) {
  return <hr className={className} />
}
