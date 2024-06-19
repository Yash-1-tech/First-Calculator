
function addNumber(){
    var no1= parseFloat(document.getElementById('no1').value);
    var no2= parseFloat(document.getElementById('no2').value);
    var result = no1 + no2 ;
    document.getElementById('result').innerText = result ;
}
function subNumber() {
    var no1 = parseFloat(document.getElementById('no1').value);
    var no2 = parseFloat(document.getElementById('no2').value);
    var result = no1 - no2;
    document.getElementById('result').innerText = result;
}
function multiplyNumber(){
    var no1= parseFloat(document.getElementById('no1').value);
    var no2= parseFloat(document.getElementById('no2').value);
    var result = no1 * no2 ;
    document.getElementById('result').innerText = result ;
}
function divNumber(){
    var no1= parseFloat(document.getElementById('no1').value);
    var no2= parseFloat(document.getElementById('no2').value);
    var result = no1 / no2 ;
    document.getElementById('result').innerText = result ;
}
