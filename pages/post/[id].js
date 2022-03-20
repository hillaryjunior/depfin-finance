import React, { useState } from "react";
import Head from "next/head";
import styles from "../../sass/components/Blogs.module.scss";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import Queries from "../../components/Queries";
import Footer from "../../components/Footer";
import { blogsData } from "../../Blogs/blogs";

export async function getStaticPaths() {
  const paths = blogsData?.map((item) => ({
    params: {
      id: item?.title.trim().replace(/\s+/g, "").toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const blogs = blogsData
    ?.filter((item) => item.title.trim().replace(/\s+/g, "") === params?.id)
    .map((item) => {
      return item;
    });

  return {
    props: {
      blogs: blogs ? blogs : {},
    },
    revalidate: 10,
  };
};

function Post({ blogs }) {
  let blogDetails = blogs.map((item) => item);

  return (
    <div className={styles.posts}>
      <Head>
        <title>{blogDetails[0].title}</title>
        <meta name="description" content={blogDetails[0].meta_description} />
        <meta name="keywords" content="" />
      </Head>

      <Header />

      <div className={styles.hero}>
        <div>
          <Link href="/apply">
            <a className={styles.link}>Apply for Loan at Depfin Finance.</a>
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <h1>{blogDetails[0].title} ?</h1>

        <div className={styles.content}>
          <div className={styles.blog__image}>
            <Image
              className={styles.image}
              src={blogDetails[0].image}
              layout="fill"
              objectFit="contain"
              alt={blogDetails[0].title}
              priority
            />
          </div>

          <div className={styles.blog__details}>
            <p>{blogDetails[0].blurb}</p>
            <div
              className={styles.blog__details}
              dangerouslySetInnerHTML={{ __html: blogDetails[0].content }}
            />
          </div>
        </div>
      </div>

      <Queries image="https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg" />

      <Footer />
    </div>
  );
}

export default Post;
