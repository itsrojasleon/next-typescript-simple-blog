import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-300 p-4">
      <div>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <div>
        <Link href="/blog">
          <a className="text-black">Blog</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
