import { LightningElement } from 'lwc';
import searchAccountsType from '@salesforce/apex/AccountController.searchAccountsType';

export default class SearchAccountsType extends LightningElement {

       /* get all the accounts whose name contains the given search key: Note: This is going to be an imperative apex approach */

        searchWord;
        accounts;

       searchHandler(event){
        this.searchWord = event.target.value;
        searchAccountsType({searchKey:this.searchWord})
            .then(result=>{
                console.log(result);
                this.accounts = result;
            })
            .catch(error=>{
                console.log(error);
            })
       }

    
}