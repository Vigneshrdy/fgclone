import BlogGrid from "@/components/blog-grid"

export default function BlogPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">Insights, guides, and stories for entrepreneurs</p>
        </div>

        <BlogGrid />
      </div>
    </main>
  )
}
