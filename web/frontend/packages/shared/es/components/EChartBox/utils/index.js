export function doSomethingAfterFrames(frameCount, callback) {
    var currentFrame = 0;
    function frameLooper() {
        currentFrame++;
        if (currentFrame >= frameCount) {
            callback();
        } else {
            requestAnimationFrame(frameLooper);
        }
    }
    frameLooper();
}
