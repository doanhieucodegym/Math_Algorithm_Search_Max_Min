function Search_min(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min=arr[i];
        }
    }
    return min;
};

function Search_max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


//tao ra  mảng ngẫu  nhiện


function dispArr(arr) {
    let cot=10;
    document.getElementById('result').innerHTML='';
    for (var i = 0; i < arr.length; i++) {
        document.getElementById('result').innerHTML+= arr[i] + " ";
        if (i % cot === 8) {
            document.getElementById('result').innerHTML+=arr[++i]+'<br>';
        }
    }
    // if (i % 10 !== 0) {
    //     document.getElementById('result').innerHTML+="<br>";
    // }
}
function randomArray() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr[i] = Math.floor(Math.random() * 90+10);
    }
    return arr;
}
function main() {
    let arry_Radom = randomArray();
    dispArr(arry_Radom);
    let minValue = Search_min(arry_Radom);
    let maxValue = Search_max(arry_Radom);
    document.getElementById('result').innerHTML+="<br/>";
    document.getElementById('result').innerHTML+="The minimum valuse is " + minValue;
    document.getElementById('result').innerHTML+="<br/>";
    document.getElementById('result').innerHTML+="The maximum valuse is " + maxValue+'<br>';

}