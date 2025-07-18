<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Audio Media Player</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>🎵 Audio Media Player</h1>
    <input type="text" id="searchInput" placeholder="Search song or artist...">
    <button onclick="searchSongs()">Search</button>
    <div id="results"></div>
    
    <div id="playerContainer" class="hidden">
      <div id="currentSongInfo"></div>
      <audio id="audioPlayer" ontimeupdate="updateSeekBar()"></audio>
      
      <div class="controls">
        <button onclick="prevSong()">⏮</button>
        <button id="playPauseBtn" onclick="togglePlay()">▶</button>
        <button onclick="nextSong()">⏭</button>
        <button onclick="toggleLoop()">🔁</button>
        <input type="range" id="seekBar" value="0" onchange="seekAudio()">
        <input type="range" id="volumeBar" min="0" max="1" step="0.01" value="1" onchange="setVolume()">
      </div>
    </div>
  </div>

  <script src="script.js"></script>
<p>This Project is made by Anshuman Singh </p>
</body>
</html>
