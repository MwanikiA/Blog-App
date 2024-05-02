import { useEffect, useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import BlogCard from './Blogcards'

function App() {

  const [ blogs, setBlogs ] = useState([])

  const fetchBlogs = async ()=>{
    const response = await fetch("http://127.0.0.1:8000/api/")
    const data = await response.json()

    setBlogs(data)
  }

  useEffect(()=>{
    fetchBlogs()
  }, [])

  console.log(blogs)

  return (
    <>
      <h1>Blog App</h1>
      <BlogCard blogs={blogs}/>
      <Link to="/create" className='bg-blue-500'>Create</Link>

      

    </>
  )
}

export default App