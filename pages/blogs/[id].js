import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { blogsData } from '../../Blogs/blogs';
import styles from '../../sass/components/BlogsDetails.module.scss';

function BlogID({ blog }) {
  const router = useRouter();

  // Fallback handling: if page is being generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Add a check to ensure that `blog` is defined before accessing its properties
  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className={styles.container}>
      <Image
        className={styles.images_detail}
        src={`/images/blogs-image/${blog.image}`}
        layout="fill"
        priority
        alt={blog.title}
      />
      <div className={styles.blogs__container}>
        <h2>{blog.title}</h2>
        <h5>{blog.blurb}</h5>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
}

// 1. Define paths for all dynamic routes using getStaticPaths
export async function getStaticPaths() {
  // Generate paths for each blog post
  const paths = blogsData.map((blog) => ({
    params: { id: blog.id.toString() }, // Ensure id is a string
  }));

  return { paths, fallback: true };
}

// 2. Fetch the blog data based on the dynamic route id
export async function getStaticProps({ params }) {
  // Find the blog post based on the id
  const blog = blogsData.find((blog) => blog.id.toString() === params.id);

  // If the blog is not found, return a 404 error
  if (!blog) {
    return { notFound: true };
  }

  return {
    props: {
      blog, // Pass blog data as props
    },
  };
}

export default BlogID;
