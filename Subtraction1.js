var Frontnum1 = document.getElementById("Frontnum1").innerHTML =
Math.floor(Math.random() * 100);
var behindnum1 =document.getElementById("behindnum1").innerHTML =
Math.floor(Math.random() * 100);

let Front_num1 = document.getElementById("Frontnum1").innerHTML;
let behind_num1 = document.getElementById("behindnum1").innerHTML;
let result1 = ( Front_num1+" - "+behind_num1+" = "+( parseInt(Front_num1) - parseInt(behind_num1) ) );
console.log( Front_num1+" - "+behind_num1+" = "+( parseInt(Front_num1) - parseInt(behind_num1) ) );
console.log(typeof Front_num1)

function answer1() {
    let result1 = ( Front_num1+" - "+behind_num1+" = "+( parseInt(Front_num1) - parseInt(behind_num1) ) );
    document.getElementById("result1").innerHTML += "คำตอบที่ถูกต้อง " + result1 + "<br>";
}

function check1() {
    let myanswer1 = document.getElementById('check1').innerHTML = document.getElementById('myanswer1').value;
    if(myanswer1 == ""){
        document.getElementById("check1").innerHTML = "กรุณาใส่คำตอบ"
    }else if(parseInt(Front_num1) - parseInt(behind_num1) == myanswer1){
        document.getElementById("check1").innerHTML = "ถูกต้อง เก่งมาก"
    }else{
        document.getElementById("check1").innerHTML = "พยายามอีกนิดนะ"
    }
}