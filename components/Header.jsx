import { useState, useEffect } from 'react';

import SearchIcon from '@/components/Icons/SearchIcon';
import { useDebounce } from '@/hooks/useDebounce';

import Github from './Icons/Github';
import Linkedin from './Icons/Linkedin';
import Twitter from './Icons/Twitter';

const REDES = [
  {
    name: 'github',
    url: 'https://github.com/jpaddeo',
    Icon: <Github className='h-8 w-8 hover:scale-95 hover:opacity-95' />,
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/juanpabloaddeo',
    Icon: <Linkedin className='h-8 w-8 hover:scale-95 hover:opacity-95' />,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/jpaddeo',
    Icon: <Twitter className='h-8 w-8 hover:scale-95 hover:opacity-95' />,
  },
];

const SocialIcon = ({ name, url, Icon }) => {
  return (
    <a href={url} alt={name} target='_blank'>
      {Icon}
    </a>
  );
};

export default function Header({ initialPosts, callbackSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const searchQueryDebounce = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (searchQueryDebounce.length) {
      callbackSearch(
        [...initialPosts].filter(({ meta }) => {
          const searchContent =
            meta.title + meta.description + meta.tags?.join(' ');
          return searchContent
            .toLowerCase()
            .includes(searchQueryDebounce.toLowerCase());
        })
      );
    } else {
      callbackSearch(initialPosts);
    }
  }, [searchQueryDebounce]);

  const handleSearch = (ev) => {
    ev.preventDefault();
    setSearchQuery(ev.target.value);
  };

  return (
    <div className='flex items-center justify-between space-y-2 pt-6 pb-8 md:space-y-5'>
      <h1 className='font-bold tracking-tight text-gray-900 dark:text-gray-100 text-xl sm:text-2xl md:text-4xl'>
        JPA's Blog
      </h1>
      <div className='relative text-xs sm:text-sm md:text-base'>
        <input
          type='text'
          className='block w-full rounded-md border border-gray-300 bg-white px-5 py-3 sm:px-3.5 sm:py-2.5 md:px-4 md:py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'
          placeholder='Search articles'
          onChange={handleSearch}
        />
        <SearchIcon />
        <div className='flex flex-row items-center justify-center'>
          {REDES.map((red) => (
            <SocialIcon key={red.name} {...red} />
          ))}
        </div>
      </div>
    </div>
  );
}
