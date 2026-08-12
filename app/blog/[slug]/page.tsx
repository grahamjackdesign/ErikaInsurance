// app/blog/[slug]/page.tsx
import { client } from '@/lib/sanity'
import { postBySlugQuery, allPostSlugsQuery } from '@/lib/queries/blog'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  const slugs = await client.fetch(allPostSlugsQuery)
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug })
  if (!post) return {}
  return {
    title: `${post.title} | Blog | Erika Echevarri`,
    description: post.excerpt,
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <figure className="my-8">
        <div className="relative w-full h-80 rounded-xl overflow-hidden">
          <Image
            src={value.asset.url}
            alt={value.alt || ''}
            fill
            className="object-cover"
          />
        </div>
        {value.caption && (
          <figcaption className="text-center text-sm text-gray-500 mt-2">{value.caption}</figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="text-gray-700 leading-relaxed mb-5">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#6C63FF] pl-6 my-6 text-gray-600 italic">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] underline hover:text-[#5a52e0]">
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug })
  if (!post) notFound()

  const date = new Date(post.publishedAt).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="bg-white min-h-screen">

      {/* Back link */}
      <div className="bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog" className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>
        </div>
      </div>

      {/* Hero image */}
      {post.mainImage?.asset?.url && (
        <div className="relative w-full h-80 lg:h-[480px] bg-gray-100">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {post.category && (
            <Link
              href={`/blog?categoria=${post.category.slug.current}`}
              className="px-3 py-1 bg-[#6C63FF] text-white text-xs font-bold rounded-full hover:bg-[#5a52e0] transition-colors"
            >
              {post.category.title}
            </Link>
          )}
          <span className="text-gray-400 text-sm">{date}</span>
          <span className="text-gray-400 text-sm">· {post.autor}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8" style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          {post.title}
        </h1>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-gray-500 leading-relaxed mb-10 pb-10 border-b border-gray-200">
            {post.excerpt}
          </p>
        )}

        {/* Body */}
        <div className="prose-custom">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {/* Back to blog */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6C63FF] text-white font-bold rounded-full hover:bg-[#5a52e0] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>
        </div>
      </article>
    </main>
  )
}
