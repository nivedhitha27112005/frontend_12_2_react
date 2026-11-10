import { useEffect, useState } from "react"

const Fetch = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts")
    const data = await response.json()
    setPosts(data.posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Fetch
