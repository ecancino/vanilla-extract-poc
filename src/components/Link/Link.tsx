import cx from 'classix'
import { forwardRef, AnchorHTMLAttributes } from 'react'
import { link } from './link.css'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export default forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, children, className, rel = 'noreferrer nofollow', ...linkProps },
  ref
) {
  return (
    <a ref={ref} className={cx(link, className)} href={href} rel={rel} {...linkProps}>
      {children}
    </a>
  )
})
