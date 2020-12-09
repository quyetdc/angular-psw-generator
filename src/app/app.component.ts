import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';

  onButtonClick() {
    console.log("Button Clicked!");
    this.password = "Password123@";
  }

  getPassword() {
    return this.password;
  }
}
