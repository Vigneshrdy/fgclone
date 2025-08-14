export default function ToolsPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tools</h1>
          <p className="text-xl text-gray-600">Discover useful tools and resources for your projects</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Image Link Generator */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Image Link Generator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Image Link Generator</h3>
              <p className="text-gray-600 mb-4">
                A simple, blazing-fast tool to upload your images and get instant shareable links. No watermarks. No
                sign-ups. Just pure utility for builders, creators, and founders.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/placeholder.svg?height=24&width=24" alt="Founders Gang" className="w-6 h-6" />
                  <span className="text-sm text-gray-500">Founders Gang</span>
                </div>
                <a
                  href="https://image.foundersgang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Try Tool
                </a>
              </div>
            </div>
          </div>

          {/* QR Code Generator */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="QR Code Generator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">QR Code Generator</h3>
              <p className="text-gray-600 mb-4">
                QR Code Generator is a fast, easy-to-use tool that turns any text, URL or contact info into a scannable
                QR code in seconds
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/placeholder.svg?height=24&width=24" alt="Founders Gang" className="w-6 h-6" />
                  <span className="text-sm text-gray-500">Founders Gang</span>
                </div>
                <a
                  href="https://qr.foundersgang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Try Tool
                </a>
              </div>
            </div>
          </div>

          {/* Startup Researcher */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Startup Researcher"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Startup Researcher</h3>
              <p className="text-gray-600 mb-4">
                A smart tool that helps startups quickly research ideas, analyze competitors, and track market trends
                all in one place.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/placeholder.svg?height=24&width=24" alt="Founders Gang" className="w-6 h-6" />
                  <span className="text-sm text-gray-500">Founders Gang</span>
                </div>
                <a
                  href="https://research.foundersgang.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Try Tool
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
