
let numerki=[];
let zmienna=1;

const przycisk = (numer) => {
    console.log("ruch")
    if (numerki.includes(numer))
    { 
        return;
    }
    const blok = document.getElementById(numer)
    
    if (zmienna === 1) {
    const text = document.createTextNode("X")
    blok.appendChild(text)
        zmienna = 0;
    } else {
        const text = document.createTextNode("O")
        blok.appendChild(text)
        zmienna = 1;
    }
    numerki.push(numer)
}