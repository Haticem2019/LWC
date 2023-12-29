import { LightningElement, api } from 'lwc';

export default class C2pSimpleEventChild extends LightningElement {
    @api attribute1;
    closeHandler(){
        //I need to create the event first.
        const closingEvent = new CustomEvent('close', { bubbles: true, detail: "This data is coming from child component with the event details.You have successfully closed the modal by using child new custom event!"});
        this.dispatchEvent(closingEvent);
    }

    footerHandler(){
        console.log("Footer handler called!");
    }
    divHandler(){
        console.log("Div Handler called!");
    }
}