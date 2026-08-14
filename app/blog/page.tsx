// app/blog/page.tsx
import { client } from '@/lib/sanity'
import { allPostsQuery, allCategoriesQuery } from '@/lib/queries/blog'
import BlogCard from '@/components/BlogCard'

export const revalidate = 60

export const metadata = {
  title: 'Blog | Erika Echevarri',
  description: 'Artículos sobre seguros, patrimonio y planificación financiera.',
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>
}) {
  const { categoria: activeCategory } = await searchParams

  const [posts, categories] = await Promise.all([
    client.fetch(allPostsQuery),
    client.fetch(allCategoriesQuery),
  ])

  const filtered = activeCategory
    ? posts.filter((p: any) => p.category?.slug?.current === activeCategory)
    : posts

  return (
    <main className="bg-black min-h-screen">

      {/* Hero */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90%" cy="20%" r="160" fill="none" stroke="#6C63FF" strokeWidth="12" opacity="0.15" />
          <circle cx="10%" cy="80%" r="100" fill="none" stroke="#6C63FF" strokeWidth="8" opacity="0.12" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-start gap-5 mb-6">
            <div className="flex-shrink-0 rounded-full" style={{ width: 6, height: 60, background: '#6C63FF', marginTop: 6 }} />
            <h1 className="text-5xl lg:text-6xl font-bold text-white" style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Erika Sin Filtros
            </h1>
          </div>
          <p className="text-xl text-gray-400 max-w-xl ml-11">
            Artículos sobre seguros, patrimonio y planificación financiera.
          </p>
        </div>
      </section>

      {/* Category filter */}
      {categories.length > 0 && (
        <section className="bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-3">
              <a
                href="/blog"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  !activeCategory
                    ? 'bg-[#6C63FF] text-white'
                    : 'border border-white/20 text-gray-400 hover:border-[#6C63FF] hover:text-white'
                }`}
              >
                Todos
              </a>
              {categories.map((cat: any) => (
                <a
                  key={cat._id}
                  href={`/blog?categoria=${cat.slug.current}`}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat.slug.current
                      ? 'bg-[#6C63FF] text-white'
                      : 'border border-white/20 text-gray-400 hover:border-[#6C63FF] hover:text-white'
                  }`}
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filtered.length === 0 ? (
          <p className="text-gray-500 text-center py-20">No hay artículos en esta categoría todavía.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post: any) => (
              <BlogCard key={post._id} {...post} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
