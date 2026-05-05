const profiles = [
  {
    name: 'Kevin Alvarez',
    pic: 'shinji.jpg',
    desc: 'Hey! My name is Kevin Alvarez, and I am currently in my final semester here at CSULB! I <i>love</i> watching movies and playing <b>tough</b> video games!',
    classes: ['CECS 427', 'CECS 435', 'CECS 455', 'CECS 470'],
    favs: [
      'Neon Genesis Evangelion',
      'A Knight of Seven Kingdoms',
      'Shin Godzilla',
    ],
    neighbor:
      'Fun fact about my groupmate James, he has been running the same ttrpg campagin for seven years!',
  },
  {
    name: 'James Curran',
    pic: 'Red_Panda_Plush.jpg',
    desc: 'My name is James Curran, and I graduate <b>this semester!</b> I like to play <b>tabletop rpgs</b> and board games with my friends',
    classes: ['CECS 470', 'CECS 474'],
    favs: ['Star Wars IV', 'Back to the Future', 'Klaus (2019)'],
    neighbor: 'Fun fact about my groupmate Anthony, his favorite superhero is Nightwing!',
  },
  {
    name: 'Anthony Theng',
    pic: 'Simon.jpg',
    desc: "Hey, I'm Anthony Theng and this is my final semester at CSULB. I enjoy watching anime and movies.",
    classes: ['CECS 470', 'CECS 475', 'REC 340'],
    favs: [
      'Cyberpunk Edgerunners',
      'Gurren Lagann',
      'Puss in Boots: The Last Wish',
    ],
    neighbor:
      "Fun fact about my groupmate Kevin, he's built around 15 computers for friends and family.",
  },
];

let current_index = 0;

function updateProfile() {
  const p = profiles[current_index];
  document.getElementById('name').textContent = p.name;
  document.getElementById('pic').src = p.pic;
  document.getElementById('desc').innerHTML = p.desc;

  const class_list = document.getElementById('classes');
  class_list.innerHTML = p.classes.map((item) => `<li>${item}</li>`).join('');

  const favs_list = document.getElementById('favorites');
  favs_list.innerHTML = p.favs.map((item) => `<li>${item}</li>`).join('');

  document.getElementById('neighbor').textContent = p.neighbor;
}

document.getElementById('next-btn').addEventListener('click', () => {
  // Loops back to 0
  current_index = (current_index + 1) % profiles.length;
  updateProfile();
});

updateProfile();
