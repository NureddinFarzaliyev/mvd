// This site was made by Nureddin Farzaliyev

// Variables
var a1
var b1
var res

// Show calc blocks

// Block 1
function openFirst() {
    document.getElementById('info').style.display="none";
    document.getElementById('calc1').style.display="block";
    document.getElementById('calc2').style.display="none";
    document.getElementById('calc3').style.display="none";
    document.getElementById('calc4').style.display="none";
}

// Block 2
function openSecond() {
    document.getElementById('info').style.display="none";
    document.getElementById('calc1').style.display="none";
    document.getElementById('calc2').style.display="block";
    document.getElementById('calc3').style.display="none";
    document.getElementById('calc4').style.display="none";
}

// Block 3
function openThird() {
    document.getElementById('info').style.display="none";
    document.getElementById('calc1').style.display="none";
    document.getElementById('calc2').style.display="none";
    document.getElementById('calc3').style.display="block";
    document.getElementById('calc4').style.display="none";
}

// Block 4
function openFourth() {
    document.getElementById('info').style.display="none";
    document.getElementById('calc1').style.display="none";
    document.getElementById('calc2').style.display="none";
    document.getElementById('calc3').style.display="none";
    document.getElementById('calc4').style.display="block";
}

// Calculators

// Block1
function ceminKvadrati() {
    document.getElementById('resultdiv').style.display="block"
    a = document.getElementById('d1a').value;
    b = document.getElementById('d1b').value;
    a = parseInt(a);
    b = parseInt(b);
    res = (a*a) + (2*a*b) + (b*b);
    document.getElementById('result').innerHTML=res;
}

// Block 2
function ferqinKvadrati() {
    document.getElementById('resultdiv2').style.display="block"
    a = document.getElementById('d2a').value;
    b = document.getElementById('d2b').value;
    a = parseInt(a);
    b = parseInt(b);
    res = (a*a) - (2*a*b) + (b*b);
    document.getElementById('result2').innerHTML=res;
}

// Block 3
function kvadratFerqi() {
    document.getElementById('resultdiv3').style.display="block"
    a = document.getElementById('d3a').value;
    b = document.getElementById('d3b').value;
    a = parseInt(a);
    b = parseInt(b);
    res = (a - b) * (a + b);
    document.getElementById('result3').innerHTML=res;
}