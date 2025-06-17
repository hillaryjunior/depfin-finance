import React from 'react'
import Login from '../../Forms/Login'
import AuthLayout from '../../Layouts/AuthLayout'

function login() {
  return (
    <div>
      <AuthLayout form={<Login />} />
    </div>
  )
}

export default login
