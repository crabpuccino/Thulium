import { showProps } from "./data.js";

function disable(baseClass, ...newClasses){
  const elements = document.querySelectorAll(`.${baseClass}`);
  elements.forEach(element => {
      element.classList.add(...newClasses);
  });
}

function dedisable(baseClass, classToRemove) {
  const elements = document.querySelectorAll(`.${baseClass}`);
  elements.forEach(element => {
      element.classList.remove(classToRemove);
  });
}

document.getElementById("alkalis").onclick = function(){disable("elemental","disable");dedisable("alkali-metal","disable")};
document.getElementById("alkalines").onclick = function(){disable("elemental","disable");dedisable("alkaline-metal","disable")};
document.getElementById("nonMs").onclick = function(){disable("elemental","disable");dedisable("non-metal","disable")};
document.getElementById("semiMs").onclick = function(){disable("elemental","disable");dedisable("semi-metal","disable")};
document.getElementById("halogens").onclick = function(){disable("elemental","disable");dedisable("halogen","disable")};
document.getElementById("nobleGs").onclick = function(){disable("elemental","disable");dedisable("noble-gas","disable")};
document.getElementById("others").onclick = function(){disable("elemental","disable");dedisable("other-metal","disable")};
document.getElementById("transitionMs").onclick = function(){disable("elemental","disable");dedisable("transition-metal","disable")};
document.getElementById("lanthanoides").onclick = function(){disable("elemental","disable");dedisable("lanthanoide","disable")};
document.getElementById("actinides").onclick = function(){disable("elemental","disable");dedisable("actinide","disable")};
document.getElementById("showAll").onclick = function(){dedisable("elemental","disable");document.getElementById("cancel").style.display="none";};

//showProps(prop)
const english = document.getElementById("e-name");
const latin = document.getElementById("l-name");
const arabic = document.getElementById("a-name");
const atomicMass = document.getElementById("atomM");
const valence = document.getElementById("valence");
const atomicRadius = document.getElementById("atomR");
const enegative = document.getElementById("e-niga");
const halfLife = document.getElementById("half");
const discoverYear = document.getElementById("year");
const neutrons = document.getElementById("neu");

english.onclick = function(){showProps(1);};
latin.onclick = function(){showProps(0);};
arabic.onclick = function(){showProps(4);};
atomicMass.onclick = function(){showProps(20);};
valence.onclick = function(){showProps(36);};
atomicRadius.onclick = function(){showProps(23);};
enegative.onclick = function(){showProps(37);};
halfLife.onclick = function(){showProps(43);};
discoverYear.onclick = function(){showProps(6);};
neutrons.onclick = function(){showProps(19);};
(function(){showProps(1);})();

function row(num){
  disable("elemental","disable");
  dedisable("P"+num,"disable");
  document.getElementById("cancel").textContent="X";
  document.getElementById("cancel").style.display="inline";
};

document.getElementById("p1").onclick = function(){row(1)};
document.getElementById("p2").onclick = function(){row(2)};
document.getElementById("p3").onclick = function(){row(3)};
document.getElementById("p4").onclick = function(){row(4)};
document.getElementById("p5").onclick = function(){row(5)};
document.getElementById("p6").onclick = function(){row(6)};
document.getElementById("p7").onclick = function(){row(7)};
document.getElementById("cancel").onclick = function(){dedisable("elemental","disable");document.getElementById("cancel").style.display="none";};

function column(num){
  disable("elemental","disable");
  dedisable("C"+num,"disable");
  document.getElementById("cancel").textContent="X";
  document.getElementById("cancel").style.display="inline";
};

document.getElementById("c1").onclick = function(){column(1);};
document.getElementById("c2").onclick = function(){column(2);};
document.getElementById("c3").onclick = function(){column(3);};
document.getElementById("c4").onclick = function(){column(4);};
document.getElementById("c5").onclick = function(){column(5);};
document.getElementById("c6").onclick = function(){column(6);};
document.getElementById("c7").onclick = function(){column(7);};
document.getElementById("c8").onclick = function(){column(8);};
document.getElementById("c9").onclick = function(){column(8);};
document.getElementById("c10").onclick = function(){column(8);};
document.getElementById("c11").onclick = function(){column(9);};
document.getElementById("c12").onclick = function(){column(10);};
document.getElementById("c13").onclick = function(){column(11);};
document.getElementById("c14").onclick = function(){column(12);};
document.getElementById("c15").onclick = function(){column(13);};
document.getElementById("c16").onclick = function(){column(14);};
document.getElementById("c17").onclick = function(){column(15);};
document.getElementById("c18").onclick = function(){column(16);};

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

document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('.elemental');
  divs.forEach(div => {
    const sup = div.querySelector('sup');
    if (sup) {
      sup.addEventListener('dblclick', () => {
        const atomicNumber = Number(sup.textContent);
        SafeSessionStorage.set('e', atomicNumber);
        window.location.href = 'element.html';
      });
    }
  });
});