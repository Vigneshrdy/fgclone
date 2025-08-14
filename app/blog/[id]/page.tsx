import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const blogPosts = {
  "2": {
    title: "How AI and Automation Are Transforming Everyday Life",
    category: "Artificial Intelligence",
    content: `
      <p>Artificial Intelligence (AI) is no longer a futuristic concept it's already embedded in our everyday routines. From smart homes to personal finance and workplace tools, AI and automation are revolutionizing how we live, work, and make decisions. This article explores how AI is shaping modern consumer behavior, enhancing daily efficiency, and creating new opportunities across sectors.</p>

      <h2>Smart Assistants and Home Automation</h2>
      <p>Modern homes are increasingly powered by AI. Smart assistants like Alexa and Google Assistant now control lights, thermostats, and appliances with simple voice commands. Users commonly ask for weather updates, play music, or set reminders—making everyday tasks quicker and more convenient.</p>

      <p>Beyond voice control, AI-driven smart devices learn from user habits. Smart thermostats optimize energy use, while lighting systems adjust automatically based on time of day or presence in a room. With billions of voice assistant devices projected to be in use globally, AI is clearly becoming a central feature of home life.</p>

      <h2>AI in Daily Tasks and Consumer Behavior</h2>
      <p>AI assists users in handling mundane and repetitive chores. People use it for drafting emails, planning meals, organizing to-do lists, and managing personal budgets. These tools save time and enhance decision-making, especially in small daily tasks where efficiency matters.</p>

      <p>AI is also embedded in apps and platforms we use every day. Recommendation engines on Netflix, Spotify, and e-commerce sites analyze user behavior to offer personalized suggestions. Even social media content and online ads are tailored by AI—shaping what users see, like, and eventually buy. Though often unnoticed, AI subtly influences consumer behavior in profound ways.</p>
    `,
    author: "Founders Gang",
    date: "29 June 2025 at 13:16",
    readTime: "4 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zaj5oVqJFIaw5HkFbTvNnwxulYLDov.png",
  },
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <article className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all posts
              </Link>
            </div>

            <div className="mb-4">
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full rounded-lg shadow-lg" />
            </div>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-8">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span>Like (0)</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span>Comment (0)</span>
                </Button>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comments (0)</h3>
              <p className="text-gray-500 text-center py-8">No comments yet. Be the first to comment!</p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
