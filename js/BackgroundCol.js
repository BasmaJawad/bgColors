console.log("background fil")

const inp = document.querySelector(".inpColor") //henter inputfelt

console.log(inp)

const pbCol = document.querySelector(".pbSetColor")    //henter knap

const colPicker= document.querySelector(".colors")

function setBackground(e){      //e har ikke påvirkning op funktionen. Viser eventet når funktionen kører
    console.log(e.key) //henter inputet
    let bdy= document.querySelector("body")
    let col = inp.value   //refererer til inputfeltet hentet i linje 3
    bdy.style.backgroundColor = col
}

function setBackgroundColPic(){
    const bdy= document.querySelector("body")
    let col = colPicker.value
    bdy.style.backgroundColor = col
}

function showHEXnum(){ //viser nummeret i inputfeltet
    inp.value = colPicker.value
}

pbCol.addEventListener('click', setBackground) //tilføjer et event til når man klikker på knap
inp.addEventListener('keyup', setBackground)
colPicker.addEventListener('input', () => {setBackgroundColPic(); showHEXnum()}) //filføjer 2 funktioner
//colPicker.addEventListener('change', showHEXnum)