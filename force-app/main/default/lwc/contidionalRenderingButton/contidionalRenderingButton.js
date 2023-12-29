import { LightningElement } from 'lwc';

export default class ContidionalRenderingButton extends LightningElement {

    showContent = false; //true
    labelName;

    handleClick(event){
        this.showContent = true;
        this.labelName = event.target.label;
    }

    handleClickHide(){
        this.showContent = false;
    }

    handleChange(){
        this.showContent = !this.showContent;
    }

    handleClickShowHide(){
        this.showContent = !this.showContent;
    }

}