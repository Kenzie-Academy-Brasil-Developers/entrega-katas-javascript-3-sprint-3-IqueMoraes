const principal = document.querySelector('main');

function showResults(x) {
    const paragrafo = document.createElement('p');     // createElement(main > section:nth-child(y)) 
    let resultado = x;
    paragrafo.textContent = resultado;
    //    const texto = document.createTextNode(x);
    //     paragrafo.appendChild(texto);
    //    innerHTML = x;
    principal.appendChild(paragrafo);


}





const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


let i = 1;

function kata1() {
    // implemente o código do kata 1 aqui
    let result = '';

    for (i = 1; i <= 25; i++) {
        if (i < 25) {
            result += i + ', ';
        }

        else {
            result += i + '.';
        }
    }

    showResults(result);  //showResults(results, 1)
}
kata1()


function kata2() {
    // implemente o código do kata 2 aqui
    let result = '';
    for (i = 25; i >= 1; i--) {
        if (i > 1) { result += i + ', '; }
        else { result += i + '.'; }
    }
    showResults(result);
}
kata2();

function kata3() {
    // implemente o código do kata 3 aqui
    let result = '';
    for (i = -1; i >= -25; i--) {
        if (i > -25) { result += i + ', '; }
        else { result += i + '.'; }
    }
    showResults(result);

}
kata3()

function kata4() {
    // implemente o código do kata 4 aqui
    let result = '';
    for (i = -25; i <= -1; i++) {
        if (i < -1) { result += i + ', '; }
        else { result += i + '.'; }
    }
    showResults(result);

}
kata4()


function kata5() {
    // implemente o código do kata 5 aqui
    let result = '';
    for (i = 25; i >= -25; i--) {
        if (i % 2 !== 0 && i > -25) { result += i + ', '; }
        else if (i % 2 !== 0 && i === -25) { result += i + '.'; }
    }
    showResults(result);

}
kata5()

function kata6() {
    // implemente o código do kata 6 aqui
    let result = '';
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i < 99) { result += i + ', '; }
        else if (i === 99) { result += i + '.'; }
    }
    showResults(result);

}
kata6()

function kata7() {
    // implemente o código do kata 7 aqui
    let result = '';
    for (i = 1; i <= 100; i++) {
        if (i % 7 === 0 && i < 98) { result += i + ', '; }
        else if (i === 98) { result += i + '.'; }
    }
    showResults(result);

}
kata7()


function kata8() {
    // implemente o código do kata 8 aqui
    let result = '';
    for (i = 100; i >= 1; i--) {
        if (i > 3 && i % 3 === 0 || i % 7 === 0) { result += i + ', '; }
        else if (i === 3) { result += i + '.'; }
    }
    showResults(result);

}
kata8()

function kata9() {
    // implemente o código do kata 9 aqui
    let result = '';
    for (i = 1; i <= 100; i++) {
        if (i < 95 && i % 5 === 0 && i % 2 !== 0) { result += i + ', '; }
        else if (i === 95) { result += i + '.'; }
    }
    showResults(result);

}
kata9()

function kata10() {
    // implemente o código do kata 10 aqui
    let result = '';
    for (i = 0; i < sampleArray.length; i++) {
        if (i < sampleArray.length - 1) { result += sampleArray[i] + ', '; }
        else if (i === sampleArray.length - 1) { result += sampleArray[i] + '.'; }
    }
    showResults(result);
}
kata10()


function kata11() {
    // implemente o código do kata 11 aqui
    let result = '';
    let iFinal = sampleArray.length - 1;
    for (i = 0; i <= iFinal; i++) {
        let verificadorI = sampleArray[i];
        if (i < iFinal && verificadorI % 2 === 0) { result += sampleArray[i] + ', '; }
        else if (i === iFinal && verificadorI % 2 === 0) { result += sampleArray[i] + '.'; }
    }
    showResults(result);
}
kata11()

function kata12() {
    // implemente o código do kata 12 aqui
    let result = '';
    let iFinal = sampleArray.length - 3;
    for (i = 0; i <= iFinal; i++) {
        let verificadorI = sampleArray[i];
        if (i < iFinal && verificadorI % 2 !== 0) { result += sampleArray[i] + ', '; }
        else if (i === iFinal && verificadorI % 2 !== 0) { result += sampleArray[i] + '.'; }
    }
    showResults(result);
}
kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    let result = '';
    let iFinal = sampleArray.length - 1;
    for (i = 0; i <= iFinal; i++) {
        let verificadorI = sampleArray[i];
        if (i < iFinal && verificadorI % 8 === 0) { result += sampleArray[i] + ', '; }
        else if (i === iFinal && verificadorI % 8 === 0) { result += sampleArray[i] + '.'; }
    }
    showResults(result);
}
kata13()

function kata14() {
    // implemente o código do kata 14 aqui
    let result = '';
    for (i = 0; i < sampleArray.length; i++) {
        let quadrado = sampleArray[i] * sampleArray[i];
        if (i < sampleArray.length - 1) { result += quadrado + ', '; }
        else if (i === sampleArray.length - 1) { result += quadrado + '.'; }
    }
    showResults(result);
}
kata14()

function kata15() {
    // implemente o código do kata 15 aqui
    let result = 0;

    for (i = 1; i <= 20; i++) {
        result += i;
    }
    result += '.';
    showResults(result);
}
kata15()



function kata16() {
    // implemente o código do kata 16 aqui
    let result = 0;

    for (i = 0; i < 20; i++) {
        result += sampleArray[i];
    }
    showResults(result);
}
kata16()



function kata17() {
    // implemente o código do kata 17 aqui
    let result = sampleArray[0];
    for (i = 0; i < 20; i++) {
        if (sampleArray[i] < result) {
            result = sampleArray[i];
        }
    }
    showResults(result);
}
kata17()



function kata18() {
    // implemente o código do kata 18 aqui
    let result = 0;
    for (i = 0; i < 20; i++) {
        if (sampleArray[i] > result) {
            result = sampleArray[i];
        }
    }
    showResults(result);
}
kata18()



// /**
//  * Daqui em diante são os bônus, por sua conta e risco
//  */
const aside = document.getElementById('aside');
const body = document.querySelector('body');
body.appendChild(aside);

function division(a,b,c = '20px', d = 'gray'){
    const div = document.createElement('div');
    div.style.width = b;
    div.style.height = c;
    div.style.margin = c;
    div.style.backgroundColor = d;
    a.appendChild(div)
}


function kataBonus1(a) {
    const p = document.createElement('p');
    p.innerHTML = a;
    const section = document.createElement('section');
    section.appendChild(p);

    for (let i = 0; i < 20; i++) {
        division(section, '100px')
    }
    aside.appendChild(section);


}
kataBonus1('kataBonus1')



function kataBonus2(a) {
    const p = document.createElement('p');
    p.innerHTML = a;
    const section = document.createElement('section');
    section.appendChild(p);

    let w = 105;
    for (let i = 0; i < 20; i++) {
        division(section,`${w}px`);
        w+=5;
    }
    aside.appendChild(section);


}
kataBonus2('kataBonus2')



function kataBonus3(a) {
    const p = document.createElement('p');
    p.innerHTML = a;
    const section = document.createElement('section');
    section.appendChild(p);

    for (let i = 0; i < 20; i++) {
        division(section,`${sampleArray[i]}px`);
    }
    aside.appendChild(section);

}
kataBonus3('kataBonus3')


function kataBonus4(a) {
    const p = document.createElement('p');
    p.innerHTML = a;
    const section = document.createElement('section');
    section.appendChild(p);

    for (let i = 0; i < 20; i++) {
        if(i === 0 || i%2 === 0){
            division(section,`${sampleArray[i]}px`, '20px', 'red');
        }else{
            division(section,`${sampleArray[i]}px`, '20px', 'gray');

        }
    }
    aside.appendChild(section);

}
kataBonus4('kataBonus4')



function kataBonus5(a) {
    const p = document.createElement('p');
    p.innerHTML = a;
    const section = document.createElement('section');
    section.appendChild(p);

    for (let i = 0; i < 20; i++) {
        if(sampleArray[i]%2 === 0){
            division(section,`${sampleArray[i]}px`, '20px', 'red');
        }else{
            division(section,`${sampleArray[i]}px`, '20px', 'gray');

        }
    }
    aside.appendChild(section);

}
kataBonus5('kataBonus5')
