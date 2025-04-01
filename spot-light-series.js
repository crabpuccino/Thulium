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
document.getElementById("showAll").onclick = function(){dedisable("elemental","disable")};