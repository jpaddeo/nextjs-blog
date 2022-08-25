import Link from 'next/link';

export default function PostCard({ slug, meta }) {
  return (
    <Link key={slug} href={`/post/${slug}`}>
      <a className='relative block group'>
        <span
          className='absolute inset-0 border-2 border-neutral-500 border-dashed rounded-lg'
          aria-hidden='true'
        ></span>
        <div className='transition bg-white border-2 border-neutral-500 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2  dark:bg-gray-800 px-4 py-6'>
          <p className='text-lg font-medium text-gray-700 dark:text-gray-200'>
            {meta.title}
          </p>
          <p class='mt-1 text-xs dark:text-gray-400'>{meta.description}</p>
        </div>
      </a>
    </Link>
  );
}
