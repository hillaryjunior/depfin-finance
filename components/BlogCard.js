import React from 'react'
import dynamic from 'next/dynamic'
import styles from '../sass/components/Blogs.module.scss'

const BlogCardItem = dynamic(() => import('./BlogCardItem'))

function BlogCard() {
  return (
    <>
      <BlogCardItem />
    </>
  )
}

export default BlogCard
