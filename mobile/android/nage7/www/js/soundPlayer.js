class SoundPlayer {
  static player;
  static queue = [];
  static play(mp3Path, onEndCallBack) {
    if (
      this.player &&
      this.player.duration > 0 &&
      this.player.currentTime < this.player.duration &&
      !this.player.ended
    ) {
      this.queue.push({ path: mp3Path, callBack: onEndCallBack });
      return;
    }

    this.player = new Audio(mp3Path);
    this.player.play();
    this.player.addEventListener("ended", () => {
      if (onEndCallBack) onEndCallBack();
      if (this.queue.length > 0) {
        const next = this.queue.shift();
        this.play(next.path, next.callBack);
      }
    });
  }
}
