import { Spin } from 'antd'
import React from 'react'

const Loading = () => {
  return (
    <div className=' h-full flex items-center justify-center'>
          <Spin  size="large" />
    </div>
  )
}

export default Loading