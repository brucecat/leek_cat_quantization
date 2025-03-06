import { useInViewport } from 'ahooks'
import { useRef, useEffect } from 'react'

// 第一次进入视口
export const useFirstIntoView = (domRef: any, callback: any) => {
  const firstFlag = useRef<boolean>(false)
  const [inViewport = false] = useInViewport(domRef)

  useEffect(() => {
    if (inViewport && !firstFlag.current) {
      firstFlag.current = true
      typeof callback === 'function' && callback()
    }
  }, [inViewport])
}
