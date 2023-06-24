import cx from 'classix'
import { forwardRef, HTMLAttributes } from 'react'
import { card } from './card.css'

export type CardProps = HTMLAttributes<HTMLDivElement>

export default forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, className, ...divProps }: CardProps,
  ref
) {
  return (
    <section ref={ref} className={cx(card, className)} {...divProps}>
      {children}
    </section>
  )
})
