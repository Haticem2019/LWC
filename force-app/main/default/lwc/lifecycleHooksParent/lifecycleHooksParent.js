import { LightningElement } from 'lwc';

export default class LifecycleHooksParent extends LightningElement {
    connectedCallback(){
        var varElement = this.template;
        console.log("Child Connectedcallback is called!" + varElement.isConnected);
    
    }

    //Mounting Phase - Constructor Hook (Method)
    constructor(){
        //First, get the super method
        super();
        var varElement = this.template;
        console.log("Child Constructor Hook Called" + varElement.isConnected);
        this.template.querySelector('div');// It is not possible to select div tag at this stage.
    }

    renderedCallback(){
        console.log("Child RenderedCallback is called!")
    }


}