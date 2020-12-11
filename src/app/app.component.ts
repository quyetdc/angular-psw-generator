import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  passwordLength = 0;

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
    this.printValues();
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
    this.printValues();
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
    this.printValues();
  }

  // We need to tell TypeScripe this Event target is HTMLInputElement
  // So we can avoid bug undefine value on TypeScript EventTarget
  onChangeLength(event: Event) {
    if (event.target) {
      const parsedValue = parseInt((event.target as HTMLInputElement).value);
      if (!isNaN(parsedValue)) {
        this.passwordLength = parsedValue;  
      }
    }
    
    this.printValues();
  }

  printValues() {
    console.log('use_letters: ', this.useLetters);
    console.log('use_numbers: ', this.useNumbers);
    console.log('use_symbols: ', this.useSymbols);
    console.log('password_length: ', this.passwordLength);
    console.log('password: ', this.password);
  }

  onButtonClick() {
    console.log("Button Clicked!");
    // this.password = "Password123@";

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    const symbols = '!@#$%^*-_';
    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
    }

    if (this.useNumbers) {
      validChars += numbers;
    }

    if (this.useSymbols) {
      validChars += symbols;
    }


    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }
}
