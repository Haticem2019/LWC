import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    studentName;
    fullName;

    getName(){
        this.studentName='Local Property';
        stdName = 'Betul Ahsen';
        console.log('this.studentName looks like this:'+ this.studentName);
        console.log('this.studentName looks like this:'+ this.stdntName);
        return stdName;
       
    }
   handleChangeName(event){
    this.fullName= event.target.value;

    
}
     handleChangeTitle(event){
        this.title= event.target.value;

 }

}