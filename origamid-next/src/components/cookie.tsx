'use client';

import getCookieValue from '@/actions/actions';
import React from 'react';

const Cookie = () => {
  const [showCookie, getShowCookie] = React.useState('');

  const handleClick = async () => {
    const showCookie = await getCookieValue('token');
    if (showCookie) {
      getShowCookie(showCookie);
    }
  };

  return (
    <section className="m-2.5">
      <h2>Cookie:</h2>
      <p>{showCookie}</p>
      <button
        onClick={handleClick}
        className="w-42 h-10 bg-gray-900 hover:bg-gray-800 text-gray-50 uppercase font-bold font-[Roboto] p-2.5 my-2 rounded-lg"
      >
        Pegar Cookie
      </button>
    </section>
  );
};

export default Cookie;
