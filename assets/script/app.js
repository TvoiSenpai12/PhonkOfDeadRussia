const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Название треков
const songs = ['deadский сад - Winx (Phonk Edition)', 'lvl shadowraze feat. genjutsu - phonk 1000-7', 'NKOHA - White night', 'shadowraze feat. morphe_ya, TATT04EK, osi, zxcursed, tlkvwn, qakasha, kiberdyr', 'SXGXVX - От Винта', 'Shadowraze - shadowfiend'];

// Отслеживание треков
let songIndex = 2;

// Загрузка трека в DOM
loadSong(songs[songIndex]);

// Обнваление трека
function loadSong(song) {
    title.innerText = song;
    audio.src = `assets/audio/${song}.mp3`;
    cover.src = `assets/img/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    document.querySelector('.play-img').src = 'assets/img/pause.svg';

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    document.querySelector('.play-img').src = 'assets/img/play.svg'

    audio.pause();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex]);

    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPrecent = (currentTime / duration) * 100;
    progress.style.width = `${progressPrecent}%`
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// Все кнопки воспроизведения
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

// Смена трека
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);