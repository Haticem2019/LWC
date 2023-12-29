import { LightningElement } from 'lwc';

export default class TemplateLoopingObject extends LightningElement {
    accounts = [
        {
            id : 100,
            name : "TechPro Education",
            type : "Software Education"

        },
        {
            id : 200,
            name : "Universal Studios",
            type : "Entertainment"
        },
        {
            id :300,
            name : "Pepsi Cola Inc.",
            type : "Beverages"
        }
    ];
}