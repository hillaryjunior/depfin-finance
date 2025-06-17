import React from 'react'

import Reset from '../../Forms/Reset'
import AuthLayout from '../../Layouts/AuthLayout'

function reset() {
  return (
    <div>
      <AuthLayout form={<Reset />} />
    </div>
  )
}

export default reset
