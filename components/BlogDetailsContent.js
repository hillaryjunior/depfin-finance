import React from 'react'

const BlogDetailsContent = ({ blog, styles }) => {
  return (
    <>
      <h2>{blog.title}</h2>
      <h5>{blog.blurb}</h5>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </>
  )
}

export default BlogDetailsContent
