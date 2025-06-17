import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProfileLayout from '../../Layouts/ProfileLayout'
import { selectUser } from '../../redux/slices'

function Profile() {
  const user = useSelector(selectUser)
  const router = useRouter()

  useEffect(() => {
    if (!user) return router.replace('/')
  }, [user, router])
  return (
    <div>
      <Head>
        <title>View My account profile | Depfin Finance</title>
        <meta name='description' content='depfin finance account Dashboard' />
      </Head>
      <ProfileLayout />
    </div>
  )
}

export default Profile
