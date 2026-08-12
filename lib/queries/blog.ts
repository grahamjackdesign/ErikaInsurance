// lib/queries/blog.ts

export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    autor,
    publishedAt,
    excerpt,
    "category": category->{ title, slug },
    "mainImage": mainImage {
      asset->{ url },
      alt
    }
  }
`

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    autor,
    publishedAt,
    excerpt,
    "category": category->{ title, slug },
    "mainImage": mainImage {
      asset->{ url },
      alt
    },
    body
  }
`

export const allPostSlugsQuery = `
  *[_type == "post"] { "slug": slug.current }
`

export const allCategoriesQuery = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`

export const postsByCategoryQuery = `
  *[_type == "post" && category->slug.current == $slug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    autor,
    publishedAt,
    excerpt,
    "category": category->{ title, slug },
    "mainImage": mainImage {
      asset->{ url },
      alt
    }
  }
`
