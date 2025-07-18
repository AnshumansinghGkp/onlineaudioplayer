# onlineaudioplayer
Project Title:
YouTube & Audio Song Search Website Using PHP, HTML, CSS, and JavaScript
1. Introduction:**

This project is a **web-based music search platform** that allows users to **search and stream songs** directly from **YouTube** or a **custom MP3 library**. It integrates modern web technologies to build an engaging and interactive music player interface.

This platform serves as a mini music player project and helps users experience audio search, stream preview or full songs, and even download locally uploaded music.


2. Tools and Technologies Used:

| Technology                        | Purpose                                                          |
| --------------------------------- | ---------------------------------------------------------------- |
| **HTML5**                         | For creating the structure of the webpage                        |
| **CSS3**                          | For styling the page, making it modern and responsive            |
| **JavaScript**                    | For frontend interactivity, fetching songs via API               |
| **PHP**                           | Backend scripting for handling uploads and server-side logic     |
| **YouTube Data API** / iTunes API | To fetch song data based on search                               |
| **XAMPP** / **Localhost Server**  | To run PHP locally                                               |
| **MySQL (optional)**              | If song metadata is stored (currently not used but can be added) |


3. Project Objective:

* To allow users to search and listen to songs by typing song names.
* Play full or preview audio.
* Provide options like Play, Pause, Download, and Volume control.
* Upload and store MP3 files.
* Build a user-friendly interface like a mini media player.


4. Features:

✅ Search songs via YouTube or iTunes
✅ Embedded audio player
✅ Upload and play custom MP3 songs
✅ Download button for user-uploaded songs
✅ Modern, responsive design
✅ Error messages if song not found
✅ Media player controls like Play, Pause, Seek, Volume


5. System Requirements:

Software:

  * XAMPP/WAMP Server (for PHP)
  * Web Browser (Chrome, Firefox)
  * VS Code/Notepad++ (for coding)

  Hardware:

  * Minimum 2 GB RAM
  * Internet Connection (if using API)


6. How It Works:
a) Frontend Flow

* User visits the home page.
* Enters a search query for a song.
* JavaScript sends the search request to the backend or API.
* Songs are fetched and displayed with embedded audio/video.
* Option to play or download appears below each result.

b) Backend Flow (PHP)

* Handles song upload via `upload.php`
* Stores uploaded files in `/songs/` folder
* Lists uploaded songs with embedded `<audio>` and download link

---

7. Folder Structure:

/project-root
│
├── index.php
├── upload.php
├── style.css
├── /songs/
│   └── uploaded.mp3


8. API Integration (YouTube/iTunes):

Option 1: **iTunes API**

bash
https://itunes.apple.com/search?term=songname&media=music


Returns 30-sec preview audio clips.

Option 2: YouTube Data API v3

* Requires a **Google API key**
* Full video search
* Can embed video using iframe:

html
<iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>



10. Future Scope:

* Add user login system
* Save search history
* Playlist creation
* Use database to store song data
* Host on live server

11. Conclusion:

This project demonstrates integration of front-end and back-end technologies to create a real-world music search application. It improves understanding of **API usage, media handling, and PHP file processing**. It’s a beginner-friendly yet advanced web development project suitable for academic purposes.

