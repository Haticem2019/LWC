import { LightningElement } from 'lwc';

export default class Homework extends LightningElement {
    num1 = 0;
    num2 = 0;

    get product(){
        return `= ${parseInt(this.num1) + parseInt(this.num2)}`;
    }

    changeHandlerNum1(event){
       this.num1 = event.target.value;  
    }
    changeHandlerNum2(event){
        this.num2 = event.target.value;
    }

    
}