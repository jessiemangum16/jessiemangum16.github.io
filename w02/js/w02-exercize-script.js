function range(){

    var inputStart = parseFloat(document.getElementById("input-start").value);
    var inputEnd = parseFloat(document.getElementById("input-end").value);
    var inputStep = parseFloat(document.getElementById("input-step").value);
    if (isNaN(inputStep)){
        inputStep = 1;
    }
    var sumRange = [];
    var x = inputStart;

    if (inputStep > 0){
        for(var i = 0; x <= inputEnd; i++){
            sumRange[i] = x;
            x += inputStep;
        }
    }else if(inputStep < 0){
        for(var i = 0; x >= inputEnd; i++){
            sumRange[i] = x;
            x -= Math.abs(inputStep);
        }
    }
    
    
    console.log(inputStep);
    console.log(sumRange);
    console.log(x);
    return [sumRange]; 
}

function sum(){
    var nums = range()[0];
    var sumTotal = 0;
    for(var i = 0; i<nums.length; i++){
        sumTotal += nums[i];
    }

    document.getElementById("output1").innerText = nums;
    document.getElementById("output2").innerText = sumTotal;
}