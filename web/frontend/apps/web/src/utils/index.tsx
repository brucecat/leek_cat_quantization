import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { storageGet, storageSet } from './storage'
import { netLogout } from './services'
import { message } from 'antd'
import React from 'react'
import Loading from '@/components/Loading'

dayjs.extend(utc)

export const ACCESS_TOKEN_KEY = 'accessToken'
export const USER_KEY = 'user'

export const UTC2LocalTime = (dateStr: string, isUtc?: boolean, format?: string) => {
  const finalFormat = format || 'YYYY-MM-DD'
  return dateStr
    ? isUtc
      ? dayjs(dateStr).local().format(finalFormat)
      : dayjs(dateStr).utc(true).local().format(finalFormat)
    : ''
}

export function setAccessToken(token: string | null) {
  storageSet(ACCESS_TOKEN_KEY, token || '')
}

export function getAccessToken() {
  return storageGet(ACCESS_TOKEN_KEY)
}

export function setUserInfo(info) {
  storageSet(USER_KEY, info || {})
}

export function getUserInfo() {
  return storageGet(USER_KEY)
}




export const REQUIRED_RULE = [
  {
    required: true,
    message: 'The field is not filled.',
  }
]

export { default as urls } from './urls'


export function logout() {
  netLogout().then(() => {
    message.success('Success to logout')

    setUserInfo(null)
    setAccessToken(null)

    setTimeout(() => {
      window.location.href = '/#/login'
    }, 1000)
  }).catch(err => {
    console.log('err: ', err);
  })
}

export function navigateToLoginPage(targetRedirect?: string) {
  console.log('targetRedirect: ', targetRedirect);
  window.location.href = '/#/login'
}



export const withSuspense = <P extends object>(Component: React.ComponentType<P>) => {
  return function App(props?: P) {
    const defalutProps = {} as P
    const finalProps = props ? Object.assign(defalutProps, props) : defalutProps
    return (
      <React.Suspense fallback={<Loading />}>
        <Component {...finalProps} />
      </React.Suspense>
    )
  }
}

export const suspenseHelper = <P extends object>(Component: React.ComponentType<P>) => {
  const funcComponent: any = withSuspense(Component)
  return React.createElement(funcComponent)
}


export function getBase64URL(pic) {
  const blob = base64ImgtoFile(pic)
  const blobUrl = window.URL.createObjectURL(blob);
  return blobUrl
}

function base64ImgtoFile(dataurl, filename = 'file') {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]  
  const suffix = mime.split('/')[1]  
  const bstr = atob(arr[1])  
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${suffix}`, {
    type: mime
  })
}


export * from './services'