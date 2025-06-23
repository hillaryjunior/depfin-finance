import React from 'react'
import dynamic from 'next/dynamic'
import { blogsData } from '../Blogs/blogs'
import styles from '../sass/components/Blogs.module.scss'


// 🔁 Lazy load each card
const BlogCardItem = dynamic(() => import('./BlogCardItem'))

function BlogCard() {
  return (
    <>
      {blogsData?.map((item) => (
        <BlogCardItem key={item.id} item={item} />
      ))}
    </>
  )
}

export default BlogCard
