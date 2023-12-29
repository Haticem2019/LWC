import { LightningElement } from 'lwc';

export default class LifecycleHooksChild extends LightningElement {
    //Mounting Phase - Constructor Hook (Method)
    constructor(){
        //First, get the super method
        super();
        var varElement = this.template;
        console.log("Child Constructor Hook Called" + varElement.isConnected);
        this.template.querySelector('div');// It is not possible to select div tag at this stage.
    }
}