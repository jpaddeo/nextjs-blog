import { useState, useEffect } from 'react';

import SearchIcon from '@/components/Icons/SearchIcon';
import { useDebounce } from '@/hooks/useDebounce';

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
    <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
      <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
        JPA's Blog
      </h1>
      <div className='relative max-w-lg'>
        <input
          aria-label='Search articles'
          type='text'
          onChange={handleSearch}
          placeholder='Search articles'
          className='block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'
        />
        <SearchIcon />
      </div>
    </div>
  );
}
