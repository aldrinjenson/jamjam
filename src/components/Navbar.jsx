import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 bg-blue-200 px-4'>
      <div className='flex items-center'>
        <Link href='/' className='text-xl font-bold text-gray-800 md:text-2xl'>
          JamJam
        </Link>
      </div>
      <div className='flex items-center'>
        <Link
          href='/about'
          className='text-gray-800 py-3 px-4 md:py-4 md:px-6 font-medium'
        >
          About
        </Link>
        <Link
          href='/instructions'
          className='text-gray-800 py-3 px-4 md:py-4 md:px-6 font-medium'
        >
          Info
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
