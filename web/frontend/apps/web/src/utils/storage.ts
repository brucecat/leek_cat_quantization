const storage = localStorage || sessionStorage
const $extension = '$MY_'

export const storageSet = (key, value) => {
  if (!value) {
    return
  }
  const name = key.includes($extension) ? key : $extension + key
  const newVlue = { value, type: isType(value), time: Date.now() }
  storage.setItem(name, JSON.stringify(newVlue))
}

export const storageGet = (key, invalidTime?: any) => {
  const name = key.includes($extension) ? key : $extension + key
  const valueJson = storage.getItem(name)
  if (valueJson) {
    const data = JSON.parse(valueJson)
    const { value, time } = data
    if (Date.now() - time <= (invalidTime || Date.now())) {
      return value
    }
  }
}

export const storageDelate = (key) => {
  const name = key.includes($extension) ? key : $extension + key
  storage.removeItem(name)
}

export const storageClear = () => {
  storage.clear()
}

export const storageLength = () => {
  return storage.length
}

const isType = (obj:any) => {
  // @ts-ignore
  return (obj && /\[object(.*?)\]/gi.exec(Object.prototype.toString.call(obj))[1].trim()) || 'undefined'
}
