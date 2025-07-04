//variables declaration zone! plz do not interfear
let n = 0;
const superNums = ['¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹','⁰'];
const nums = ['1','2','3','4','5','6','7','8','9','0'];
const roman = ['I','II','III','IV','V','VI','VII','VIII','IX'];
const nonMetals = [1,6,7,8,15,16,34];
const semiMetals = [5,14,32,33,51,52,84];
const anomaly = [24, 29, 42, 47, 74, 79, 106, 111];
const gutsText = document.getElementById("guts");
const rowText = document.getElementById("row");
const oldCoText = document.getElementById("oldCo");
const newCoText = document.getElementById("newCo");
const electronNumber = document.getElementById("electrons");
const tierText = document.getElementById("tier");
const errDisplay = document.getElementById("errDisplay");
const group = document.getElementById("group");
const state = document.getElementById("state");

import { getProps } from './data.js';

function superScript(num){
  while (/\d/.test(num)){
    for (let i = 0; i < nums.length; i++) {
      if (String(num).includes(nums[i])){
        num = String(num).replace(nums[i], superNums[i]);
      }
    }
  }
  return num;
}

function romanNumeric(num){
  let j;
  while (num>10){
    num - 10;
    j++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (String(num).includes(nums[i])){
      num = String(num).replace(nums[i], roman[i]);
    }
  }
  return ('X'.repeat(j))+num;
}
function changeGroup(text,color){group.textContent=text;group.style.color = color;}
function getGroup(atomicNum){
  atomicNum = Number(atomicNum);
  if (atomicNum !== 1 && oldCoText.textContent == '1'){changeGroup('Alkali metals','#FF6961');}
  else if (oldCoText.textContent == '2'){changeGroup('Alkaline Earth metals','#77CBDA');}
  else if (oldCoText.textContent == '18'){changeGroup('Noble gases','#7F00FF');}
  else if (oldCoText.textContent == '17'){changeGroup('Halogens','#77DD77');}
  else if (tierText.textContent == 'D'){changeGroup('Transition metals','#FDFD96');}
  else if (tierText.textContent == 'F' && rowText.textContent == '6'){changeGroup('Lanthanides','#39FF14');}
  else if (tierText.textContent == 'F' && rowText.textContent == '7'){changeGroup('Actinides','#FF4500');}
  else if (nonMetals.includes(atomicNum)){changeGroup('Non-metals','#FF345E');}
  else if (semiMetals.includes(atomicNum)){changeGroup('Semi-metals','#BDC3C7');}
  else {changeGroup('Other (post-transition) metals','#75B1FF');}
}

function swap(){
  if(gutsText.textContent.includes('[')){
    gutsText.textContent=gutsText.textContent.replace('[He2]','1s²');
    gutsText.textContent=gutsText.textContent.replace('[Ne10]','1s² 2s² 2p⁶');
    gutsText.textContent=gutsText.textContent.replace('[Ar18]','1s² 2s² 2p⁶ 3s² 3p⁶');
    gutsText.textContent=gutsText.textContent.replace('[Kr36]','1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶');
    gutsText.textContent=gutsText.textContent.replace('[Xe54]','1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶');
    gutsText.textContent=gutsText.textContent.replace('[Rn86]','1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶');
  }
  else {
    if (electronNumber.value != 86){gutsText.textContent=gutsText.textContent.replace('1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶','[Rn86]');}
    if (electronNumber.value != 54){gutsText.textContent=gutsText.textContent.replace('1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶','[Xe54]');}
    if (electronNumber.value != 36){gutsText.textContent=gutsText.textContent.replace('1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶','[Kr36]');}
    if (electronNumber.value != 18){gutsText.textContent=gutsText.textContent.replace('1s² 2s² 2p⁶ 3s² 3p⁶','[Ar18]');}
    if (electronNumber.value != 10){gutsText.textContent=gutsText.textContent.replace('1s² 2s² 2p⁶','[Ne10]');}
    if (electronNumber.value != 2){gutsText.textContent=gutsText.textContent.replace('1s²','[He2]');}
  }
}

//the function responsable for S "apparently"
function S(prev,e){
  oldCoText.textContent =e;
  newCoText.textContent = romanNumeric(e)+'A';
  tierText.textContent ='S';
  gutsText.textContent = prev+n+'s'+superScript(e);
}

function P(prev,e){
  oldCoText.textContent = String(e+12);
  newCoText.textContent = romanNumeric(e+2)+'A';
  if (e==6){newCoText.textContent='0';}
  tierText.textContent = 'P';
  gutsText.textContent = prev+n+'p'+superScript(e);
} 

function D(prev,optional,e){
  oldCoText.textContent = (e+2);
  if (e==6 || e==7 || e==8){
    newCoText.textContent = 'VIII';
  }
  else if (e==9 || e==10){
    newCoText.textContent = romanNumeric(e-8)+'B';
  }else {newCoText.textContent = romanNumeric(e+2)+'B';}

  if (e==9 || e==4){e++}
  gutsText.textContent = prev+optional+(n-1)+'d'+superScript(e);
  if (anomaly.includes(Number(electronNumber.value))){gutsText.textContent = gutsText.textContent.replace('s²','s¹');}
  tierText.textContent = 'D';
}

function F(prev,nxt,e){
  newCoText.textContent = 'N/A';
  oldCoText.textContent = 'N/A';
  tierText.textContent = 'F';
  if (e==0){oldCoText.textContent = '3';newCoText.textContent = 'IIIB';}
  gutsText.textContent = prev+(n-2)+'f'+superScript(e)+nxt;
}

function reset(){
  gutsText.textContent ='‎';
  rowText.textContent = '';
  oldCoText.textContent = '';
  newCoText.textContent = '';
  errDisplay.textContent = '';
  tierText.textContent = '';
  Array.from(document.getElementsByTagName("span")).forEach(span => {
    span.textContent = '';span.style.color = '#BDC3C7';
  });
}

function getState(e){
  if (e == 35 || e == 80) {
    state.textContent = 'Liquid';
    state.style.color = '#75B1FF';
  }
  else if (e==1 || e==9 || e==8 || e==7 || e==17 || oldCoText.textContent=='18'){
    state.textContent = 'Gas';
    state.style.color = '#77DD77';
  }
  else {
    state.textContent = 'Solid';
  }
};

function startAction(e){
  if (e>118 || e<1){errDisplay.textContent = 'Error! elements can only be between 1 and 118';}
  else {
    getProps(e);
    if (e<=2){
      n=1;
      S('',e);
      if (e==2){
        oldCoText.textContent = '18';
        newCoText.textContent = '0';
      }
    }

    else if (e<=10){
      n=2;
      e = e-2;
      if (e<=2){S('[He2] ',e);}
      else {e=e-2;P('[He2] 2s² ',e)}
    }

    else if (e<=18){
      e = e-10;
      n=3;
      if (e<=2){S('[Ne10] ',e);}
      else {e=e-2;P('[Ne10] 3s² ',e);}
    }

    else if (e<=36){
      e = e-18;
      n=4;
      if (e<=2){S('[Ar18] ',e);}
      else if (e<=12){e=e-2;D('[Ar18] 4s² ','',e);}
      else {e=e-12;P('[Ar18] 4s² 3d¹⁰ ',e);}
    }

    else if (e<=54){
      e = e-36;
      n=5;
      if (e<=2){S('[Kr36] ',e);}
      else if (e<=12){e=e-2;D('[Kr36] 5s² ','',e);}
      else {e=e-12;P('[Kr36] 5s² 4d¹⁰ ',e);}
    }

    else if (e<=86){
      e = e-54;
      n=6;
      if (e<=2){S('[Xe54] ',e);}
      else if (e<=17){e=e-3;F('[Xe54] 6s² ',' 5d¹',e);}
      else if (e<=26){e=e-16;D('[Xe54] 6s² ','4f¹⁴ ',e);}
      else {e=e-26;P('[Xe54] 6s² 4f¹⁴ 5d¹⁰ ',e);}
    }

    else if (e<=118){
      e = e-86;
      n=7;
      if (e<=2){S('[Rn86] ',e);}
      else if (e<=17){e=e-3;F('[Rn86] 7s² ',' 6d¹',e);}
      else if (e<=26){e=e-16;D('[Rn86] 7s² ','5f¹⁴ ',e);}
      else {e=e-26;P('[Rn86] 7s² 5f¹⁴ 6d¹⁰ ',e);}
    }

    else {errDisplay.textContent = 'Unkown error! plz check your input';}
    rowText.textContent = n;
  getGroup(electronNumber.value);
  getState(electronNumber.value);
  }
}

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
const start = SafeSessionStorage.get('e');
if (start <= 118 && start > 0){
  window.onload = function(){startAction(start);};
  SafeSessionStorage.remove('e');
  SafeSessionStorage.clear();
  electronNumber.value = start;
};

electronNumber.onchange = function(){reset()};
document.getElementById("eventHorizen").onclick = function(){startAction(Number(electronNumber.value));};
document.getElementById("swap").onclick = function(){swap();};
