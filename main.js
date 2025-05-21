const bgmSources = {
    normal: "bgm_normal.mp3",
    praise: "bgm_praise.mp3",
    insult: "bgm_insult.mp3"
  };
  document.getElementById("playButton").addEventListener("click", () => {
    document.getElementById("bgm").play(); // ✅ クリックで再生＝許可される
  });
  