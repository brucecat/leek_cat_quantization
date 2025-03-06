export function doSomethingAfterFrames(frameCount:number, callback: ()=>void) {
  let currentFrame = 0

  function frameLooper() {
    currentFrame++
    if (currentFrame >= frameCount) {
      callback()
    } else {
      requestAnimationFrame(frameLooper)
    }
  }

  frameLooper()
}

