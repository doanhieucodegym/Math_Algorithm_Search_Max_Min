function Search_min(arr) {
    let min =arr[0];
    for (let i =0 ; i<arr.length; i++){
        if(arr[i]<arr[0]){
            arr[i] = min;
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
let arry_Radom =[];
    for(let i = 0; i <100;i++){
        arry_Radom[i] = Math.floor(Math.random()* 101);
    };


function dispArr(arr) {
    for (var i = 0; i < arr.length; ++i) {
       let putstr = arr[i] + " ";
        if(i%10==9){
            document.write(putstr+"\n");
        }
    }
    if(i%10!=0){
        document.write(putstr+"\n");
    }
}
dispArr(arry_Radom);
let minValue = Search_min(arry_Radom);
let maxValue = Search_max(arry_Radom);
document.write("<br/>");
document.write("The minimum valuse is "+minValue);
document.write("The maximum valuse is "+maxValue);

