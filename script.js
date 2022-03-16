const add = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;

const operate = (operator,x,y)=>{
    x=parseInt(x);
    y=parseInt(y);
    if(operator==='+'){
        return add(x,y);
    }
    else if(operator==='-'){
        return subtract(x,y);
    }
    else if(operator==='*'){
        return multiply(x,y);
    }
    else if(operator==='/'){
        return divide(x,y);
    }
}
