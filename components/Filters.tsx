"use client"

import { formUrlQUery } from '@/sanity/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'

const links = ['all', 'Next 13', 'frontend', 'backend', 'fullstack'];

const Filters = () => {
    const [active, setActive] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilter = (link: string) => {
      let newUrl = ''; 
      
      if(active === link) {
        setActive('');

        newUrl = formUrlQUery({
          params: searchParams.toString(),
          keysToRemove: ["category"],
        });
      } else {
        setActive(link);

        newUrl = formUrlQUery({
          params: searchParams.toString(),
          key: "category",
          value: link.toLowerCase()
        });
      }

      router.push(newUrl, {scroll: false});
    };
    
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full gap-2 max-w-full overflow-auto py-12 sm:max-w-2xl ">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap px-8 py-2.5 rounded-lg capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
}

export default Filters