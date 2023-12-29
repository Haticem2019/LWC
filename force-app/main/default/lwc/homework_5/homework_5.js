import { LightningElement } from 'lwc';

export default class ComboboxBasic extends LightningElement {
    value ='';
    usName='';
    get options() {
        return [
            { label: 'DEVELOPER', value: 'DEVELOPER' },
            { label: 'ADMIN', value: 'ADMIN' },
            { label: 'ADMIN AND DEVELOPER', value: 'ADMIN AND DEVELOPER' },
        ];
    }
    changeHandlerName(event){
        this.usName = event.target.value;  
     }
    handleChange(event) {
        this.value = event.detail.value;
    }
}