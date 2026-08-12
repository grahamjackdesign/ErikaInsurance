// components/BlogCard.tsx
import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  title: string
  slug: { current: string }
  autor: string
  publishedAt: string
  excerpt?: string
  category?: { title: string; slug: { current: string } }
  mainImage?: { asset: { url: string }; alt?: string }
}

export default function BlogCard({ title, slug, autor, publishedAt, excerpt, category, mainImage }: BlogCardProps) {
  const date = new Date(publishedAt).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link href={`/blog/${slug.current}`} className="group block">
      <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
          {mainImage?.asset?.url ? (
            <Image
              src={mainImage.asset.url}
              alt={mainImage.alt || title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#6C63FF]/10">
              <svg className="w-12 h-12 text-[#6C63FF]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          {/* Category badge */}
          {category && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-[#6C63FF] text-white text-xs font-bold rounded-full">
              {category.title}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6C63FF] transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
          {excerpt && (
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
              {excerpt}
            </p>
          )}
          <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
            <span>{autor}</span>
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
