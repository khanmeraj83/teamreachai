import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='logo'>
        {/* <img src='/logo.jpg' alt='Restaurant Logo' /> */}
        <Image
            src='/logo.png'
            alt='logo'
            width={800}
            height={600}
            layout='responsive'
          />
      </div>
      
      <nav className='navigation'>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>Constitution</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
