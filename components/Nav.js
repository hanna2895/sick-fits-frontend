import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => (
    <User>
      {({ data: { me } }) => (
          <NavStyles>
            <Link href="/items">
                <a>Shop</a>
            </Link>
            {me && (
                <>
                    <Link href="/sell">
                        <a>Sell</a>
                    </Link>
                    <Link href="/orders">
                        <a>Orders</a>
                    </Link>
                    <Link href="/me">
                        <a>Account</a>
                    </Link>
                    <Signout />
                </>
            )}
            {!me && (
                <Link href="/signup">
                    <a>Sign In</a>
                </Link>
            )}
          </NavStyles>
      )}
    </User>

);

export default Nav;

// the empty jxs brackets are called a react fragment, which is a new way to wrap adjacent jsx elements without having to use a div and that is AWESOME 
