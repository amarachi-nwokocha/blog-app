"use client"

import { useState } from "react"

// Define the shape of a single blog
interface BlogData {
  userId: number
  id: number
  title: string
  body: string
}

// Props should expect an array of BlogData
type Props = {
  blogData: BlogData[]
}

const BlogCards = ({ blogData }: Props) => {
  // Local state also typed as an array of BlogData
  const [blogs, setBlogs] = useState<BlogData[]>(blogData)


  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 p-10">
      {blogs.map((blog) => (
        <div key={blog.id} className="p-4 border-1 rounded-md border-gray-600">
          <h2 className="text-xl text-bold mb-4 capitalize">{blog.title}</h2>
          <p className="text-sm text-gray-600">{blog.body}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogCards
