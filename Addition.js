var Frontnum = document.getElementById("Frontnum").innerHTML =
Math.floor(Math.random() * 10);
var behindnum =document.getElementById("behindnum").innerHTML =
Math.floor(Math.random() * 10);

let Front_num = document.getElementById("Frontnum").innerHTML;
let behind_num = document.getElementById("behindnum").innerHTML;
let result = ( Front_num+" + "+behind_num+" = "+( parseInt(Front_num) + parseInt(behind_num) ) );
console.log( Front_num+" + "+behind_num+" = "+( parseInt(Front_num) + parseInt(behind_num) ) );
console.log(typeof Front_num)

function answer() {
    let result = ( Front_num+" + "+behind_num+" = "+( parseInt(Front_num) + parseInt(behind_num) ) );
    document.getElementById("result").innerHTML += "คำตอบที่ถูกต้อง " + result + "<br>";
}

function check() {
    let myanswer = document.getElementById('check').innerHTML = document.getElementById('myanswer').value;
    if(parseInt(Front_num) + parseInt(behind_num) == myanswer){
        document.getElementById("check").innerHTML = "ถูกต้อง เก่งมาก"
    }else if(myanswer == ""){
        document.getElementById("check").innerHTML = "กรุณาใส่คำตอบ"
    }else{
        document.getElementById("check").innerHTML = "พยายามอีกนิดนะ"
        //console.log(typeof myanswer)
        //console.log(myanswer)
        //console.log(typeof parseInt(Front_num) + parseInt(behind_num))
        //console.log(parseInt(Front_num) + parseInt(behind_num))
    }
}
