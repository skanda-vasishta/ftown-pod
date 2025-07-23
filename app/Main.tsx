import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Welcome to the F-Town Pod!
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Sports from the perspective of three delusional Sacramento Kings fans
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, images } = post
            return (
              <li key={slug} className="py-8">
                <article className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {post.images && post.images.length > 0 && (
                    <Image
                      src={post.images[0]}
                      alt={post.title}
                      width={320}
                      height={180}
                      className="object-cover rounded-lg w-80 h-44 flex-shrink-0"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h2>
                    {/* Optionally add tags here */}
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400 mb-2">
                      {summary}
                    </div>
                    <div className="text-base leading-6 font-medium">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read more: "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
