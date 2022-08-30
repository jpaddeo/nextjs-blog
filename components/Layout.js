import Head from 'next/head';

export default function Layout({ children, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta content={meta.description} name='description' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        {meta.image && <meta property='og:image' content={meta.image} />}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:site'
          content={meta.url || 'https://blog.jpaddeo.work'}
        />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        {meta.image && <meta name='twitter:image' content={meta.image} />}
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css'
          as='script'
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
          rel='stylesheet'
        />
      </Head>
      <main className='mx-auto px-4 bg-white text-black antialiased dark:bg-gray-900 dark:text-white'>
        <div className='flex h-screen flex-col justify-between'>{children}</div>
      </main>
    </>
  );
}
