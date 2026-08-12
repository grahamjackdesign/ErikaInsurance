// sanity/schemas/post.ts
export const post = {
  name: 'post',
  title: 'Artículo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'autor',
      title: 'Autor',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'Extracto',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Texto alternativo', type: 'string' },
            { name: 'caption', title: 'Pie de foto', type: 'string' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'autor',
      media: 'mainImage',
    },
    prepare({ title, author, media }: any) {
      return { title, subtitle: author, media }
    },
  },
}
