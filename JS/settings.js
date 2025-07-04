const dark = document.getElementById("dark");
const light = document.getElementById("light");
const cosmic = document.getElementById("cosmic");
const aqua = document.getElementById("aqua");
const energy = document.getElementById("energy");
const future = document.getElementById("future");

function reset(){
  dark.style.setProperty('--state', 'none');
  light.style.setProperty('--state', 'none');
  cosmic.style.setProperty('--state', 'none');
  aqua.style.setProperty('--state', 'none');
  energy.style.setProperty('--state', 'none');
  future.style.setProperty('--state', 'none');
}

function changeColors(background, accent, lite, err, text, sec, high, ulti) {
  const root = document.documentElement;
  root.style.setProperty('--prime-color', background);
  root.style.setProperty('--frist-color', accent);
  root.style.setProperty('--frist-clr-lite', lite);
  root.style.setProperty('--err-clr', err);
  root.style.setProperty('--text-prime', text);
  root.style.setProperty('--text-sec', sec);
  root.style.setProperty('--high-clr', high);
  root.style.setProperty('--ulti-clr', ulti);
};

function changeTheme(theme){
  if(theme == 0){
    if (dark){reset();dark.style.setProperty('--state', 'block');};
    changeColors('#2c3e50', '#1abc9c', '#2ecc71', '#e74c3c', '#ecf0f1', '#bdc3c7', '#f1c40f', '#3498db');
  } else if(theme == 1){
    if (dark){reset();light.style.setProperty('--state', 'block');};
    changeColors('#F4F6F7', '#76D7C4', '#ABEBC6', '#F5B7B1', '#2C3E50', '#7F8C8D', '#F9E79F', '#85C1E9');
  } else if(theme == 2){
    if (dark){reset();cosmic.style.setProperty('--state', 'block');};
    changeColors('#0B0C10', '#8E44AD', '#FF6EC7', '#E74C3C', '#C5C6C7', '#5c7594', '#00FFFF', '#45A29E');
  } else if(theme == 3){
    if (dark){reset();aqua.style.setProperty('--state', 'block');};
    changeColors('#FAFAFA', '#A2D5F2', '#B8F2E6', '#FF6B6B', '#013A63', '#73787d', '#FDF6EC', '#007B8A');
  } else if(theme == 4){
    if (dark){reset();energy.style.setProperty('--state', 'block');};
    changeColors('#1C1C1E', '#E63946', '#FF6F00', '#B22222', '#F9F1FB', '#5A5A5A', '#FFA500', '#FFD60A');
  } else if(theme == 5){
    if (dark){reset();future.style.setProperty('--state', 'block');};
    changeColors('#FDFEFF', '#00F0FF', '#CFFF04', '#FF357A', '#121212', '#404B69', '#FFA500', '#A66CFF');
  }
  localStorage.setItem('theme', theme);
};

window.onload = function(){
  let theme = localStorage.getItem('theme');
  if(theme == null){theme = 0;};
  changeTheme(theme);
};

if (dark){
  dark.onclick   = function(){changeTheme(0);};
  light.onclick  = function(){changeTheme(1);};
  cosmic.onclick = function(){changeTheme(2);};
  aqua.onclick   = function(){changeTheme(3);};
  energy.onclick = function(){changeTheme(4);};
  future.onclick = function(){changeTheme(5);};
};