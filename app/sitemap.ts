import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://erikaechavarri.com'

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/politica-privacidad`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/terminos-condiciones`, lastModified: new Date(), priority: 0.3 },
  ]
}