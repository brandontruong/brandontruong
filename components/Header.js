import Link from 'next/link';
import { Flex, Box } from '@rebass/grid';

const Header = ({ pathname }) => (
  <header>

    <Flex justifyContent="space-between" >
      <Box>
        <h1>Brandon Truong</h1>
        <div>Work portfolio</div>
      </Box>
      <Box>

        <nav>
          <Link prefetch href='/'>
            <a className={pathname === '/' && 'is-active'}>
              Home
            </a>
          </Link>
          <Link prefetch href='/about'>
            <a className={pathname === '/about' && 'is-active'}>
              About
            </a>
          </Link>
        </nav>
      </Box>
    </Flex>
  </header>
);

export default Header;
