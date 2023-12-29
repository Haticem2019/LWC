import { LightningElement, track } from 'lwc';

export default class TrackProperty extends LightningElement {

   @track contact = {
        name : "Steve Jobs",
        location : "United States",
        company : "Apple"
    }

    handleChange(event){
        this.contact.location = event.target.value;
    }

    handleChangeName(event){
        this.contact.name = event.target.value;
    }

    handleChangeCompany(event){
        this.contact.company = event.target.value;
    }
}