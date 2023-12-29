import { deleteRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DeleteRecordFunctionCase extends LightningElement {
/*
Use-Case: Prepare an LWC Component to delete Case Records when we pass the recordId in the Lightning Input box.
*/

recordId;
//'500Hr00001XoOKbIAN';

changeHandler(event){
    this.recordId= event.target.value;
}

deleteCaseRecord(){
    deleteRecord(this.recordId)
    .then(result=>{
        console.log(result);
        this.successMessage();
        this.template.querySelector('form.deleteCase').reset();
    })
    .catch(error=>{
        console.log(error);
        this.errorMessage();
    })
}

    successMessage(){
        const successToastMsg = new ShowToastEvent({
            title : 'SUCCESS!',
            message : 'You have successfully deleted the Case Record!',
            variant : 'success',
            mode : 'pester'
        });
        this.dispatchEvent(successToastMsg);
    }
    errorMessage(){
        const errorToastMsg = new ShowToastEvent({
            title : 'ERROR!',
            message : 'Your Case Record has NOT been deleted. Please check your error code!',
            variant : 'error',
            mode : 'sticky'
        });
        this.dispatchEvent(errorToastMsg);
    }

}