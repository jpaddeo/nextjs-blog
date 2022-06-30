import Link from 'next/link';

export default function PostCard({ slug, meta }) {
  return (
    <li
      key={slug}
      className='py-4 px-4 border-2 border-gray-700 hover:border-white hover:border-dashed rounded-lg cursor-pointer'
    >
      <Link href={`/post/${slug}`} className='text-gray-900 dark:text-gray-100'>
        <article>
          <div className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"'>
            <dl>
              <dt className='sr-only'>Published on</dt>
              <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                <time dateTime={meta.date}>
                  {new Intl.DateTimeFormat().format(new Date(meta.date))}
                </time>
              </dd>
            </dl>
            <div className='space-y-3 xl:col-span-3'>
              <div>
                <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                  {meta.title}
                </h3>
                <div className='flex flex-wrap'>
                  {meta.tags?.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
              <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                {meta.description}
              </div>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
}
