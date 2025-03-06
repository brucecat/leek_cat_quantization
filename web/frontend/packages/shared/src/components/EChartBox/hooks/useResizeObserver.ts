import { useEffect, useState } from 'react'

export const useResizeObserver = (ref:any, callback:()=>void) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      setDimensions({ width, height })

      typeof callback === 'function' && callback()
    })

    observer.observe(ref.current)

    return () => {
      observer.unobserve(ref.current)
    }
  }, [ref])

  return dimensions
}

export default useResizeObserver

