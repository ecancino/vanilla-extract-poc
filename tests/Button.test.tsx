import { render, screen } from './setup'
import Button from '../src/components/Button/Button'

describe('Button', () => {
  test('renders a button', () => {
    render(<Button>Button</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  // test('renders accent variant', () => {
  //   render(<Button>Click me</Button>)
  //   expect(screen.getByRole('button')).toHaveClass('accent')
  // })

  // test('renders small variant', () => {
  //   render(<Button size="small">Click me</Button>)
  //   expect(screen.getByRole('button')).toHaveClass('small')
  // })
})
