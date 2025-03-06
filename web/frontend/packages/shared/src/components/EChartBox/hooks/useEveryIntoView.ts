import { useInViewport, useUpdateEffect } from 'ahooks'

// 每次进入视口
export const useEveryIntoView = (domRef: any, callback: any) => {
  const [inViewport = false] = useInViewport(domRef)

  useUpdateEffect(() => {
    if (inViewport) {
      typeof callback === 'function' && callback()
    }
  }, [inViewport])
}
