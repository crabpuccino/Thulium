const mainText = document.getElementById("show");
const electrons = document.getElementById("truth");
const period = document.getElementById("n");
const subShell = document.getElementById("l");
const orbital = document.getElementById("m");
const spin = document.getElementById("s");
const error = document.getElementById("error"); 
const theOtherOne = document.getElementById("another");
const radial1 = document.getElementById("ball");
let atomicNumber;

const nonMetals = ['1s1', '2p2', '2p3', '2p4', '3p3', '3p4', '4p4'];
const semiMetals = ['2p1', '3p2', '4p2', '4p3', '5p3', '5p4', '6p4'];

const lastSubShells = [
  "1s1", "1s2",
  "2s1", "2s2", "2p1", "2p2", "2p3", "2p4", "2p5", "2p6",
  "3s1", "3s2", "3p1", "3p2", "3p3", "3p4", "3p5", "3p6",
  "4s1", "4s2", "3d1", "3d2", "3d3", "3d5", "3d5", "3d6", "3d7", "3d8", "3d10", "3d10","4p1", "4p2", "4p3", "4p4", "4p5", "4p6",
  "5s1", "5s2", "4d1", "4d2", "4d3", "4d5", "4d5", "4d6", "4d7", "4d8", "4d10", "4d10","5p1", "5p2", "5p3", "5p4", "5p5", "5p6",
  "6s1", "6s2",
  "5d1", "4f1", "4f2", "4f3", "4f4", "4f5", "4f6", "4f7", "4f8", "4f9", "4f10", "4f11", "4f12", "4f13", "4f14",
  "5d2", "5d3", "5d5", "5d5", "5d6", "5d7", "5d8", "5d10", "5d10","6p1", "6p2", "6p3", "6p4", "6p5", "6p6",
  "7s1", "7s2",
  "6d1", "5f1", "5f2", "5f3", "5f4", "5f5", "5f6", "5f7", "5f8", "5f9", "5f10", "5f11", "5f12", "5f13", "5f14",
  "6d2", "6d3", "6d5", "6d5", "6d6", "6d7", "6d8", "6d10", "6d10","7p1", "7p2", "7p3", "7p4", "7p5", "7p6"
];
import { getName } from './data.js';

const SafeSessionStorage = (() => {
  const memoryStore = {};
  let available = true;

  try {
    const testKey = '__test__';
    sessionStorage.setItem(testKey, 'test');
    sessionStorage.removeItem(testKey);
  } catch (e) {
    available = false;
    console.warn('SessionStorage not available. Falling back to in-memory storage.');
  }

  function set(key, value) {
    try {
      const data = JSON.stringify(value);
      if (available) {
        sessionStorage.setItem(key, data);
      } else {
        memoryStore[key] = data;
      }
    } catch (e) {
      console.error('Error setting sessionStorage:', e);
    }
  }

  function get(key) {
    try {
      const data = available ? sessionStorage.getItem(key) : memoryStore[key];
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Error reading sessionStorage:', e);
      return null;
    }
  }

  function remove(key) {
    try {
      if (available) {
        sessionStorage.removeItem(key);
      } else {
        delete memoryStore[key];
      }
    } catch (e) {
      console.error('Error removing sessionStorage item:', e);
    }
  }

  function clear() {
    try {
      if (available) {
        sessionStorage.clear();
      } else {
        for (const key in memoryStore) {
          delete memoryStore[key];
        }
      }
    } catch (e) {
      console.error('Error clearing sessionStorage:', e);
    }
  }

  return { set, get, remove, clear };
})();

function clear(){
  electrons.textContent = "‎";
  mainText.textContent = "‎";
  document.getElementById("sym1").textContent = "‎";
  document.getElementById("name1").textContent = "‎";
  document.getElementById("atom1").textContent = "‎";
  document.getElementById("atom2").textContent = "‎";
  document.getElementById("sym2").textContent = "‎";
  document.getElementById("name2").textContent = "‎";
};

function getLastLvl(){
  let m =0;let s =0;let e=0;
  if (subShell.value == 's' && orbital.value == "0") {
    m = 1;
    s = 1;
  }

  else if(subShell.value == 'p' && Number(orbital.value) >= -1 && Number(orbital.value) <= 1){
    m = 2;
    s = 3;
  }

  else if (subShell.value == 'd' && Number(orbital.value) >= -2 && Number(orbital.value) <= 2){
    m = 3;
    s = 5;
  }

  else if (subShell.value == 'f' && Number(orbital.value) >= -3 && Number(orbital.value) <= 3){
    m = 4;
    s = 7;
  }

  else {
    error.textContent = "This subshell doesn't exist! try another";
    clear();
  };

  if (error.textContent == "This subshell doesn't exist! try another"){}
  else {

    if (spin.value == "1/2"){
      e = Number(orbital.value) + m;
    }
    else if (spin.value == "-1/2"){
      e = Number(orbital.value) + m + s;
    }

    else {
      error.textContent = "This subshell doesn't exist! try another";
      clear();
    };

    if (lastSubShells.indexOf(String(period.value) + String(subShell.value) + String(e)) < 0){
      error.textContent = "This subshell doesn't exist! try another";
      clear();
    }
    else {
      electrons.textContent = e;
      mainText.textContent = period.value + subShell.value;
      atomicNumber = lastSubShells.indexOf(String(period.value) + String(subShell.value) + String(e))+1;
      document.getElementById("atom1").textContent = atomicNumber;
      document.getElementById("atom2").textContent = atomicNumber+1;
      getName(atomicNumber);
      error.textContent = "";
    };

    if (lastSubShells[atomicNumber-1].includes("d5") || lastSubShells[atomicNumber-1].includes("d10")){
      theOtherOne.style.display = "flex";
    }
    else {
      theOtherOne.style.display = "none";
    };

    let lastSubShell = period.value + subShell.value + e;
    if(lastSubShell.includes("s1") && !(lastSubShell.includes("1s"))){
      radial1.style.backgroundColor = "var(--Alkali-metals)";
    }
    else if(lastSubShell.includes("s2")){
      radial1.style.backgroundColor = "var(--Alkaline-Earth-metals)";
    }
    else if(lastSubShell.includes("d") && !(lastSubShell.includes("5d1")) && !(lastSubShell.includes("6d1"))){
      radial1.style.backgroundColor = "var(--Transition-metals)";
    }
    else if(lastSubShell.includes("6f")){
      radial1.style.backgroundColor = "var(--Lanthanides)";
    }
    else if(lastSubShell.includes("7f")){
      radial1.style.backgroundColor = "var(--Actinides)";
    }
    else if(lastSubShell.includes("p5")){
      radial1.style.backgroundColor = "var(--Halogens)";
    }
    else if(lastSubShell.includes("p6") || lastSubShell.includes("1s2")){
      radial1.style.backgroundColor = "var(--Noble-gases)";
    }
    else if(nonMetals.includes(lastSubShell)){
      radial1.style.backgroundColor = "var(--Non-metals)";
    }
    else if(semiMetals.includes(lastSubShell)){
      radial1.style.backgroundColor = "var(--Semi-metals)";
    }
    else {
      radial1.style.backgroundColor = "var(--other-metals)";
    };
  };
};

document.getElementById("go").onclick = function(){getLastLvl()};

document.getElementById("nav1").onclick = function(){
  SafeSessionStorage.set('e', atomicNumber);
  window.location.href = 'element.html';
};
document.getElementById("nav2").onclick = function(){
  SafeSessionStorage.set('e', atomicNumber+1);
  window.location.href = 'element.html';
};

function reset(){
  error.textContent="‎";
  SafeSessionStorage.clear();
  radial1.style.backgroundColor = "var(--frist-clr-lite)";
};

period.onchange = function(){reset();clear();};
subShell.onchange = function(){reset();clear();};
orbital.onchange = function(){reset();clear();};
spin.onchange = function(){reset();clear();};