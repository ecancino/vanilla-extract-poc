import { useCallback, useState } from 'react'

import type { ButtonProps } from '../Button/Button'

import Button from '../Button/Button'

export type CounterProps = Omit<ButtonProps, 'onClick'>

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount((c) => c + 1), [setCount])

  return (
    <Button {...props} onClick={increment}>
      Count is {count}
    </Button>
  )
}
