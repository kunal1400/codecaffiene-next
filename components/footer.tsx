import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            Copyright © 2023 <Link target="_blank" href="https://codecaffiene.com">CodeCaffiene</Link>. All rights reserved.
          </h3>          
        </div>
      </Container>
    </footer>
  )
}
