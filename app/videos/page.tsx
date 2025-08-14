export default function VideosPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Videos</h1>
          <p className="text-xl text-gray-600">Discover helpful video resources and tutorials</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Know About Founders Gang */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src="/placeholder.svg?height=240&width=400"
                alt="Know About Founders Gang"
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-white bg-opacity-90 rounded-full p-3">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Know About Founders Gang</h3>
              <p className="text-gray-600 mb-4">Watch this video to know about Founders Gang aim and mission</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/placeholder.svg?height=24&width=24" alt="Founders Gang" className="w-6 h-6" />
                  <span className="text-sm text-gray-500">Founders Gang</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=muwB0cYoZDc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch
                </a>
              </div>
            </div>
          </div>

          {/* Build FullStack Website */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src="/placeholder.svg?height=240&width=400"
                alt="Build FullStack Website with AI"
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="bg-white bg-opacity-90 rounded-full p-3">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How to Build & Deploy a FullStack Website with AI Tools and Deploy it
              </h3>
              <p className="text-gray-600 mb-4">
                Know how to build fullstack website using AI tools like lovable and deploy it using vercel
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    alt="Victor Adhikary"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-500">Victor Adhikary</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=4IQLOGUvwco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
