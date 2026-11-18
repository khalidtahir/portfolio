import type { MetadataRoute } from "next"
import { SITE_URL } from "@/data/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/background", "/resume", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }))
}
