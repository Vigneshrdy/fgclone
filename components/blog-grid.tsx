import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "Micro-Mobility and EV Infrastructure in India: Market Overview and Entrepreneurial Opportunities",
    excerpt:
      "India's transportation ecosystem is rapidly electrifying, driven especially by micro-mobility (e-bikes, e-scooters, electric rickshaws) and associated EV infrastructure...",
    category: "Uncategorized",
    readTime: "1 min read",
    author: "Founders Gang",
    date: "30 June 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Knyke0zxTBt80OhXruSOGMxFc2dDts.png",
  },
  {
    id: 2,
    title: "How AI and Automation Are Transforming Everyday Life",
    excerpt:
      "Artificial Intelligence (AI) is no longer a futuristic concept it's already embedded in our everyday routines. From smart homes to personal finance and workplace tools, AI and...",
    category: "Artificial Intelligence",
    readTime: "1 min read",
    author: "Founders Gang",
    date: "29 June 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zaj5oVqJFIaw5HkFbTvNnwxulYLDov.png",
  },
  {
    id: 3,
    title: "How to Startup Without Money: A Step-by-Step Guide for Aspiring Entrepreneurs",
    excerpt:
      "Discover how to startup without money by bootstrapping your idea, leveraging free internet and AI tools, validating demand quickly, and generating early revenue to fuel...",
    category: "Guide",
    readTime: "1 min read",
    author: "Founders Gang",
    date: "11 June 2025",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Top Startup Ideas in the Age of AI (May 2025 Edition)",
    excerpt:
      "The AI revolution isn't just coming it's already here. From how we shop and work to how we learn and get support, artificial intelligence is reshaping every aspect of our...",
    category: "Ideas",
    readTime: "1 min read",
    author: "Victor Adhikary",
    date: "28 May 2025",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "How to Validate Your Startup Idea: A Step-by-Step Guide for First-Time Founders",
    excerpt:
      "Every great startup begins with a simple question: Does this idea solve a real problem? As a new entrepreneur, you can protect your time and passion by validating your idea...",
    category: "Startup",
    readTime: "1 min read",
    author: "Founders Gang",
    date: "24 May 2025",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "How Founders Gang is Revolutionizing Entrepreneurship in India",
    excerpt:
      "Founders Gang, founded by Victor Adhikary in November 2024, is building the Y Combinator of India providing early-stage founders with access to funding, mentorship...",
    category: "Startup",
    readTime: "1 min read",
    author: "Founders Gang",
    date: "24 May 2025",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="aspect-video relative overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Badge
                variant="secondary"
                className={`text-xs ${
                  post.category === "Artificial Intelligence"
                    ? "bg-purple-100 text-purple-800"
                    : post.category === "Guide"
                      ? "bg-green-100 text-green-800"
                      : post.category === "Ideas"
                        ? "bg-orange-100 text-orange-800"
                        : post.category === "Startup"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                }`}
              >
                {post.category}
              </Badge>
              <span className="text-xs text-gray-500">{post.readTime}</span>
            </div>

            <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
              <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h3>

            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
