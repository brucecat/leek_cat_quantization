import { Spin } from 'antd'
import React from 'react'

export const LoadingPage: any = () => {
  return <div className='h-full flex justify-center items-center'><Spin spinning={true} size='large'></Spin></div>
}

export default LoadingPage
