
function sumUp(){
    var inputNum = document.getElementById("input-num").value;
    var sumTotal = 0;
  
    if (inputNum >= 0){
        for(var i=1; i <= inputNum; i++){
            sumTotal = sumTotal + i;
        }
        document.getElementById("output").innerText = sumTotal;
    }else{
        document.getElementById("output").innerText = "Please input a number greater than 0.";
    }
  }
  
  function sumOf(){
    var inputNum1 = parseFloat(document.getElementById("input-num1").value);
    var inputNum2 = parseFloat(document.getElementById("input-num2").value);
    var sumTotal = 0;
  
    if (inputNum1 >= 0 && inputNum2 >= 0){
        sumTotal = inputNum1 + inputNum2;
  
        document.getElementById("output2").innerText = sumTotal;
    }else{
        document.getElementById("output2").innerText = "Please input a number greater than 0.";
  
    }
  }
  
  function getValues(){
    var inputNum1 = parseFloat(document.getElementById("input1").value);
    var inputNum2 = parseFloat(document.getElementById("input2").value);
  
    if (inputNum1 >= 0 && inputNum2 >= 0){
        return [inputNum1, inputNum2];
        
    }else{
        document.getElementById("outputFinal").innerText = "Please input a number greater than 0.";
    }
  }
  
  function add(){
    let nums = getValues();
    document.getElementById("outputFinal").innerText = nums[0] + nums[1];
  }
  const sub = function(){
    let nums = getValues();
    document.getElementById("outputFinal").innerText = nums[0] - nums[1];
  }
  const mult = () => {
    let nums = getValues();
    document.getElementById("outputFinal").innerText = nums[0] * nums[1];
  }
  function divide(){
    let nums = getValues();
    document.getElementById("outputFinal").innerText = nums[0] / nums[1];
  }