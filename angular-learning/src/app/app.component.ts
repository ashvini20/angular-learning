import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learning';
  data = 'dynamic';
  disabled= false;
  user_name = 'John Deo';
  show=false;
  color='green';
  getValue(){
    return 'Getting value from function';
  }
}
