import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

const COLUMNS = [
    { label: 'First Name', fieldName: 'FirstName', type: 'text' },
    { label: 'Last Name Type', fieldName: 'LastName', type: 'text' },
    { label: 'Email', fieldName: 'Email', type: 'Email' },
    { label: 'MobilePhone', fieldName: 'MobilePhone', type: 'Phone' },
    { label: 'Title', fieldName: 'Title', type: 'text' }
]; 
export default class GetContacts extends LightningElement {
    columns = COLUMNS;

    @wire(getContacts)
    contacts;

    }