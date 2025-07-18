let songs = [];
let currentIndex = 0;

function searchSongs() {
  const query = document.getElementById("searchInput").value;
  fetch("search.php?q=" + encodeURIComponent(query))
    .then(res => res.json())
    .then(data => {
      const results = document.getElementById("results");
      results.innerHTML = '';
      songs = data.results || [];

      if (songs.length === 0) {
        results.innerHTML = "❌ No songs found.";
        return;
      }

      songs.forEach((song, index) => {
        const div = document.createElement("div");
        div.className = "song";
        div.innerHTML = `<strong>${song.trackName}</strong><br>${song.artistName}`;
        div.onclick = () => loadSong(index);
        results.appendChild(div);
      });

      document.getElementById("playerContainer").classList.remove("hidden");
      loadSong(0);
    });
}

function loadSong(index) {
  currentIndex = index;
  const song = songs[index];
  const audio = document.getElementById("audioPlayer");
  document.getElementById("currentSongInfo").innerText = `${song.trackName} - ${song.artistName}`;
  audio.src = song.previewUrl;
  audio.play();
  document.getElementById("playPauseBtn").innerText = "⏸";
}

function togglePlay() {
  const audio = document.getElementById("audioPlayer");
  const btn = document.getElementById("playPauseBtn");
  if (audio.paused) {
    audio.play();
    btn.innerText = "⏸";
  } else {
    audio.pause();
    btn.innerText = "▶";
  }
}

function prevSong() {
  if (currentIndex > 0) {
    loadSong(currentIndex - 1);
  }
}

function nextSong() {
  if (currentIndex < songs.length - 1) {
    loadSong(currentIndex + 1);
  }
}

function toggleLoop() {
  const audio = document.getElementById("audioPlayer");
  audio.loop = !audio.loop;
  alert(audio.loop ? "🔁 Loop ON" : "🔁 Loop OFF");
}

function updateSeekBar() {
  const audio = document.getElementById("audioPlayer");
  const seekBar = document.getElementById("seekBar");
  seekBar.value = (audio.currentTime / audio.duration) * 100 || 0;
}

function seekAudio() {
  const audio = document.getElementById("audioPlayer");
  const seekBar = document.getElementById("seekBar");
  audio.currentTime = (seekBar.value / 100) * audio.duration;
}

function setVolume() {
  const audio = document.getElementById("audioPlayer");
  const volumeBar = document.getElementById("volumeBar");
  audio.volume = volumeBar.value;
}
