//variables declaration zone! plz do not interfear
let n = 0;
const superNums = ['¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹','⁰'];
const nums = ['1','2','3','4','5','6','7','8','9','0'];
const anomaly = [24, 29, 42, 47, 74, 79, 106, 111];
const gutsText = document.getElementById("guts");
const rowText = document.getElementById("row");
const oldCoText = document.getElementById("oldCo");
const newCoText = document.getElementById("newCo");
const electronNumber = document.getElementById("electrons");
const tierText = document.getElementById("tier");
const errDisplay = document.getElementById("errDisplay");

function superScript(num){
  for (let i = 0; i < nums.length; i++) {
    if (String(num).includes(nums[i])){
      num = String(num).replace(nums[i], superNums[i])
    }
  }
  return num;
}


//the function responsable for S "apparently"
function S(prev,e){
  oldCoText.textContent =e;
  newCoText.textContent =e+'A';
  tierText.textContent ='S';
  e = superScript(e);
  gutsText.textContent = prev+n+'s'+e;
}

function P(prev,e){
  oldCoText.textContent = (e+12);
  newCoText.textContent = (e+2)+'A';
  tierText.textContent = 'P';
  e = superScript(e);
  gutsText.textContent = prev+n+'p'+e;
} 

function D(prev,optional,e){
  oldCoText.textContent = (e+2);
  if (e==6 || e==7 || e==8){
    newCoText.textContent = '8';
  }
  else if (e==9 || e==10){
    newCoText.textContent = (e-8)+'B';
  }else {newCoText.textContent = (e+2)+'B';}

  if (e==9 || e==4){e++}
  e = superScript(e);
  gutsText.textContent = prev+optional+(n-1)+'d'+e;

  if (anomaly.includes(Number(electronNumber.value))){gutsText.textContent = gutsText.textContent.replace('s²','s¹');}
  tierText.textContent = 'D';
}

function F(prev,nxt,e){
  newCoText.textContent = 'N/A';
  oldCoText.textContent = 'N/A';
  if (e==14){oldCoText.textContent = '3';newCoText.textContent = '3B';}
  tierText.textContent = 'F';
  e = superScript(e);
  gutsText.textContent = prev+(n-2)+'f'+e+nxt;
}

function reset(){
  gutsText.textContent ='‎';
  rowText.textContent = '';
  oldCoText.textContent = '';
  newCoText.textContent = '';
  errDisplay.textContent = '';
  tierText.textContent = '';
}

function startAction(e){
  if (e>118 || e<1){errDisplay.textContent = 'Error! elements can only be between 1 and 118';}
  else {
    if (e<=2){
      n=1;
      S('',e);
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
  }
}
electronNumber.onchange = function(){reset()}
document.getElementById("eventHorizen").onclick = function(){startAction(Number(electronNumber.value));}
