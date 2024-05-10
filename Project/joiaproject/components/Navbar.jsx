import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/profile"><a>Profile</a></Link>
      <Link href="/search"><a>Search</a></Link>
      <Link href="/login"><a>Login</a></Link>
      {/* Add more links as needed */}
    </nav>
  );
};

export default Navbar;
