function Calculator(arg1, operator, arg2){
  //Operators
      function Division(dividend, divisor) {
      console.log(dividend+ ' / ' + divisor + ' = ',dividend / divisor);
    }
    
      function Sum(addend1, addend2) {
      console.log(addend1 + ' + ' +addend2 + ' = ', addend1 + addend2);
    }
  
      function Difference(minuend, subtrahend) {
      console.log(minuend + ' - ' +subtrahend+ ' = ', minuend - subtrahend);
    }
  
      function Product(multiplicand, multiplier) {
      console.log(multiplicand + ' * ' +multiplier + ' = ', multiplicand * multiplier);
    }

      function Exponent(base, power) {
      console.log(base + ' ^ ' +power + ' = ', base ** power);
    }
    //Functions

      function Sqrt(radicand) {
      console.log(' sqrt '+ radicand + ' = ', Math.sqrt(radicand));
    }

      function Sin(sinOfValue) {
      console.log(' sin ' + sinOfValue + ' = ', Math.sin(sinOfValue));
    }

      function Cos(cosOfValue) {
      console.log(' cos ' + cosOfValue + ' = ', Math.cos(cosOfValue));
    }

      function Tan(tanOfValue) {
      console.log(' tan ' + tanOfValue + ' = ', Math.tan(tanOfValue));
    }

      

    
    switch(operator){
      case '+':
        Sum(arg1, arg2);
        break;
      case '/':
        Division(arg1, arg2);
        break;
      case '-':
        Difference(arg1, arg2);
        break;
      case '*':
        Product(arg1, arg2);
        break;
      case '**':
        Exponent(arg1, arg2);
        break;
      case 'sqrt':
        Sqrt(arg1);
        break;
      case 'sin':
        Sin(arg1);
        break;
      case 'cos':
        Cos(arg1);
        break;
      case 'tan':
        Tan(arg1);
        break;
      default:
        break;
    }
  
  }
  
  Calculator(1, '+', 3);
  Calculator(1, "/", 0);
  Calculator(2, '-', 1);
  Calculator(1/2, '*', 2);
  Calculator(4, '**', 2);
  Calculator(16, 'sqrt');
  Calculator(20, 'sin');
  Calculator(20, 'cos');
  Calculator(20, 'tan');