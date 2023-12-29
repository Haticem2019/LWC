import { LightningElement, track } from 'lwc';

export default class PasswordChecker extends LightningElement {
    @track secretPassword = '';
    @track showCongratulations = false;

    handlePasswordChange(event) {
        this.secretPassword = event.target.value;
        if (this.secretPassword === 'password1!') {
            this.showCongratulations = true;
        } else {
            this.showCongratulations = false;
        }
    }
}