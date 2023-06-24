import cx from 'classix'
import { forwardRef, HTMLAttributes } from 'react'
import { button, ButtonVariants } from './button.css'

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonVariants

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, size, accent, ...buttonProps },
  ref
) {
  return (
    <button ref={ref} className={cx(button({ accent, size }), className)} {...buttonProps}>
      {children}
    </button>
  )
})
