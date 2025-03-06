import { autorun } from '@flow-engine-formily/reactive'
import { useEffect } from 'react'

export const useWatchEffect = (tracker: () => void, deps: React.DependencyList) => {
  useEffect(() => {
    const dispose = autorun(tracker)
    return () => {
      dispose()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}