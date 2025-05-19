const player = document.querySelector('.player');
const playlist = document.querySelector('.playlist');

//controls
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const playBtn = document.querySelector('.play-pause');
const imgSrc = document.querySelector('.play-pause__src');
const audio = document.querySelector('#audio');

//progress-bar
const trackTime = document.querySelector('.track-time');
const currentTimeEl = document.querySelector('.total-time');
const durationEl = document.querySelector('.last-time');

let currentTrackIndex = 0;

const songs = [
  {
    title: 'Майский вальс',
    name: 'Я. Евдакимов',
    src: './music/22-mayvals.mp3',
  },
  {
    title: 'День Победы ',
    name: 'Л. Лещенко',
    src: './music/18-p18.mp3',
  },
  {
    title: 'С чего начинается Родина',
    name: 'Георг Отс',
    src: './music/23-schegona.mp3',
  },
  {
    title: 'В городском саду',
    name: 'Г. Виноградов',
    src: './music/Георгий Виноградов - В городском саду.mp3',
  },
  {
    title: 'Случайный вальс',
    name: 'Л. Утёсов',
    src: './music/16-sluchaynyy-vals.mp3',
  },
  {
    title: 'Амурские волны',
    name: 'Военный вальс',
    src: './music/Военный вальс - Амурские волны.mp3',
  },
  {
    title: 'Севастопольский вальс',
    name: 'Георг Отс',
    src: './music/Георг Отс - Севастопольский вальс.mp3',
  },
]

export function createPlayList() {

  songs.forEach((song, index) => {
   const li = document.createElement('li');
   li.classList.add('playlist__item');
   li.textContent = song.title;

   const songName = document.createElement('p');
   songName.classList.add('name');
   songName.textContent = song.name;

   playlist.append(li);
   li.append(songName);

   setPlayList(index, li, playlist);
  });
}
/* createPlayList(); */


function setPlayList(index, li) {

  li.addEventListener('click', () => {
    currentTrackIndex = index;

    li.classList.add('active');
    loadTrack(index, li);
    playSong();
   });
}

function loadTrack(index) {
  const songTitle = document.querySelector('.title');
  const song = songs[index];

  songTitle.textContent = song.title;
  audio.src = song.src;
  audio.load();
}

loadTrack(currentTrackIndex);


playBtn.addEventListener('click', () => {
  if (!player.classList.contains('plying')) {
    playSong();
  } else
    pauseSong();
});

function playSong() {
  player.classList.add('plying');
  imgSrc.src = './images/icons/pause.png'
  audio.play();
}

function pauseSong() {
  player.classList.remove('plying');
  imgSrc.src = './images/icons/play.png'
  audio.pause();
}


nextBtn.addEventListener('click', playNextSong);

function playNextSong() {
  currentTrackIndex += 1;
  if (currentTrackIndex > songs.length -1) {
    currentTrackIndex = 0;
  }

  loadTrack(currentTrackIndex);
  playSong();
}


prevBtn.addEventListener('click', playPrevSong);

function playPrevSong() {
  currentTrackIndex -= 1;
  if (currentTrackIndex < 0) {
    currentTrackIndex = songs.length -1;
  }

  loadTrack(currentTrackIndex);
  playSong();
}

audio.addEventListener('ended', playNextSong); //при окончании песни автоматически начинает проигрывать следующую песню(без переключений)
audio.addEventListener('timeupdate', updateProgress); // движение синего ползунка прогрессбара

function updateProgress() {
  const {duration, currentTime} = audio;
  const progressPercent = (currentTime / duration) * 100;
  const progressBar = document.querySelector('.track_active');
  progressBar.style.width = `${progressPercent}%`

  if (isNaN(duration)) return;

  currentTimeEl.textContent = formatTime(currentTime); // сколько времени проиграла песня в минутах
  durationEl.textContent = formatTime(duration);  //общее время песни в минутах
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds}`;
}


trackTime.addEventListener('click', setProgress); // ручная перемотка прогрессбара

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}









