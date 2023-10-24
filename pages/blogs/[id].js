
import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

import { blogsData } from '../../Blogs/blogs';
import styles from '../../sass/components/BlogsDetails.module.scss'


function BlogID() {

  <script
  dangerouslySetInnerHTML={{ __html: blogsData }}
/>
  const router = useRouter();
  const regex = /(<([^>]+)>)/ig;
  // console.log(router.query);
  // console.log(blogsData.filter(item => item.id === router.query.id));
  return (
    <>
    
  <div>{blogsData.filter(item => item.id == router.query.id).map((item) => (
        <div key ={item.id} className={styles.container}>
        <Image
        className={styles.images_detail}
              src={item.image}
              layout="fill"
              // objectFit="cover"
              priority
              alt={item.title}
            />
          <div className={styles.blogs__container} >
        
            <h2>{item.title}</h2>
            <h5>{item.blurb}</h5>
            <div  dangerouslySetInnerHTML={{__html: item.content}} />
           
          </div>
        </div>
      ))

}
</div>

</>
  );
}

export default BlogID