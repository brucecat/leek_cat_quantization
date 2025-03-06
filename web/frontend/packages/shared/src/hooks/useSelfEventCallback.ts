import { useCallback } from 'react'

type EventType = React.BaseSyntheticEvent | Event

export function useSelfEventCallback<T extends EventType = EventType>(callback: (e: T) => void, deps: React.DependencyList = []) {
  return useCallback(function (this: HTMLElement, e: T) {
    if (e.target === this) {
      callback(e)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps])
}