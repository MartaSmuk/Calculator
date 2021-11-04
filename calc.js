function Calculator(arg1, operator, arg2){

    this.sum = function(addend1, addend2){
        console.log(addend1 +' + ' +addend2 + ' = ', addend1 + addend2)
    };
  
    var innerCalculator;
  
      function Division(dividend, divisor) {
      console.log(dividend + " / " + divisor + " = ", dividend / divisor);
    }
    
      function Sum(addend1, addend2) {
      console.log(addend1 +' + ' +addend2 +' = ', addend1 + addend2);
    }
  
      function Difference(minuend, subtrahend) {
  
    }
  
      function Product(multiplicand, multiplier) {
  
    }
  
    switch(operator){
      case '+':
        Sum(arg1, arg2);
        //this.sum(arg1, arg2);
        break;
      case '/':
        Division(arg1, arg2);
        break;
      default:
        break;
  
    }
  
      //console.log(arg1, operator, arg2);
      //console.log(this);
  
  }
  
  Calculator(1, '+', 3);
  Calculator(1, "/", 0);