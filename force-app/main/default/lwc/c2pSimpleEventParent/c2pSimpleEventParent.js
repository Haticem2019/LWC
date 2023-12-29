import { LightningElement } from 'lwc';

export default class C2pSimpleEventParent extends LightningElement {

    showModal=false;
    message;
    showMessage=false;

    clickHandler(){
        this.showModal=true;
    }

    closeModalHandler(event){
        this.showModal=false;
        this.message=event.detail;
        this.showMessage=true;
    }
}