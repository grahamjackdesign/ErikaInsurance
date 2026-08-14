import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '@/lib/sanity'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: any
  autor: string
}

async function getLatestPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0..3] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      autor
    }`
  )
}

export default async function BlogPreview() {
  const posts = await getLatestPosts()

  return (
    <section className="bg-primary-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Erika Sin Filtros
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                {post.mainImage ? (
                  <Image
                    src={urlFor(post.mainImage).width(400).height(176).url()}
                    alt={post.mainImage.alt ?? post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary/40 text-4xl">✦</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs text-gray-400 mb-2">
                  {new Date(post.publishedAt).toLocaleDateString('es-MX', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                <h3 className="text-base font-bold text-primary leading-snug mb-2 group-hover:text-primary-dark transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                )}
                <span className="mt-4 text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors">
                  Leer más →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Link to full blog */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-sm"
          >
            Ver todos los artículos
          </Link>
        </div>

      </div>
    </section>
  )
}
