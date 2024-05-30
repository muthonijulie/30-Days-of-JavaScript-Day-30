class Calculator{
    constructor(num){
        this.x=num;
    }
    add(val){
        this.x+=val;
        return this;
    }
    subtract(val){
        this.x-=val;
        return this;
    }
    multiply(val){
        this.x*=val;
        return this;
    }
    divide(val){
        if(val===0)
            console.log("Division by zero is not allowed");
        
        this.x/=val;
        return this;
    }
    power(val){
        this.x=this.x**val;
        return this;
    }
    getResult(){
        return this.x;
    }
}

//console.log(new Calculator(10).add(5).subtract(7).getResult()); 
//console.log(new Calculator(2).multiply(5).power(2).getResult());
console.log(new Calculator(20).divide(0).getResult());