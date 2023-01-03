const input = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');

input.addEventListener('input', () => {
  const inputText = input.value;
  textMeme.innerHTML = inputText;
});

const memeContainer = document.getElementById('meme-image-container');
const btnsChangeBorder = document.getElementsByClassName('change-border');
const borderStyles = {
  fire: '3px dashed red',
  water: '5px double blue',
  earth: '6px groove green',
};

const changeBorder = (key) => {
  memeContainer.style.border = borderStyles[key];
};

const congifEventBorder = () => {
  for (let index = 0; index < btnsChangeBorder.length; index += 1) {
    const btnBorder = btnsChangeBorder[index];
    btnBorder.addEventListener('click', (event) => {
      const idSelected = event.target.id;
      changeBorder(idSelected);
    });
  }
};
congifEventBorder();

const memesSuggestions = document.getElementsByClassName('meme-sug');
const memeImage = document.getElementById('meme-image');

const memeSug = {
  'meme-1': 'imgs/meme1.png',
  'meme-2': 'imgs/meme2.png',
  'meme-3': 'imgs/meme3.png',
  'meme-4': 'imgs/meme4.png',
};

const configNewImg = (newImage) => {
  memeImage.setAttribute('src', newImage);
};

const configEventImgMeme = () => {
  for (let index = 0; index < memesSuggestions.length; index += 1) {
    const btnMeme = memesSuggestions[index];
    btnMeme.addEventListener('click', (event) => {
      const idSelected = event.target.id;
      configNewImg(memeSug[idSelected]);
    });
  }
};
configEventImgMeme();

function readImage() {
  if (this.files && this.files[0]) {
      var file = new FileReader();
      file.onload = function(e) {
        memeImage.src = e.target.result;
      };       
      file.readAsDataURL(this.files[0]);
  }
}
document.getElementById("meme-insert").addEventListener("change", readImage, false);