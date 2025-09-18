"use client"

import { createBlog } from "@/app/blogs/blogActions"
import { useState } from "react"

export default function BlogModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    try {
      setLoading(true)
      
      const result = await createBlog(formData)

      alert(
        `Json Placeholder doesn’t allow post so here is the data\n\nTitle: ${result.title}\nBody: ${result.body}`
      )

      // ✅ Close modal after submission succeeds
      setIsOpen(false)
    } catch (err) {
      console.error("Error creating blog:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white p-2 w-40 rounded-md"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-black p-4 rounded-lg">
            <form action={handleSubmit} className="p-10">
              <h2 className="mb-2 text-white">Add New Blog</h2>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="border p-2 w-full"
                required
              />
              <textarea
                name="body"
                placeholder="Body"
                className="border p-2 w-full mt-2"
                required
              />

              {/* Submit button with loading state */}
              <button
                type="submit"
                disabled={loading}
                className={`mt-3 px-4 py-2 rounded text-white ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Submitting..." : "Create Post"}
              </button>
            </form>

            <button
              className="mt-2 text-sm text-gray-400 hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
