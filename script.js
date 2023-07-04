const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark-mode');
});

const dinamico = document.getElementById('escreva');
let charindex = 0;
let textarrayindex = 0;
const newtextDelay = 2000;
const erasingDelay = 100;
const typingDelay = 100;

function escrevahtml() {
  const textoparaescrever = ['{Desenvolvedor}', '{Backend}'];
  if (charindex < textoparaescrever[textarrayindex].length) {
    dinamico.textContent += textoparaescrever[textarrayindex].charAt(charindex);
    charindex++;
    setTimeout(escrevahtml, typingDelay);
  return;
	}

    setTimeout(erase, newtextDelay);
  return;
}

function erase() {
  const textoparaescrever = ['{Desenvolvedor}', '{Backend}'];
  if (charindex > 0) {
    dinamico.textContent = textoparaescrever[textarrayindex].substring(0, charindex - 1);
    charindex--;
    setTimeout(erase, erasingDelay);
  return;
	}

    textarrayindex++;
    if (textarrayindex >= textoparaescrever.length) textarrayindex = 0;
    setTimeout(escrevahtml, typingDelay + 1100);
  return;
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(escrevahtml, newtextDelay + 250);
});
function colorir(){
  var home = document.getElementById("home")
  var about = document.getElementById("about")
  var Habilidades = document.getElementById("Habilidades")
  var contact = document.getElementById("contact")
  var portifolio = document.getElementById("portifolio")



  
}
function updateText() {
  var button = document.getElementById('hbgq');
  var nav = document.getElementById('sub_nav')
  if (button.innerHTML === 'menu') {
    button.innerHTML = 'close';
    nav.style.display='block'
   
    
  } else {
    button.innerHTML = 'menu';
    nav.style.display='none'
    
  }
}
  





