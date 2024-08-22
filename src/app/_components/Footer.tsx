import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <div className='grid'>
          {Array.from({ length: 18 }).map((_, index) => (
            <div key={index} className='dot'></div>
          ))}
        </div>
      </div>
      <div className='footer-right'>
        <div className='chevron'>&#171;&#171;&#171;</div>
      </div>
    </div>
  );
};

export default Footer;
