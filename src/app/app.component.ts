import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 

// String Interpolation
  num1 :number=2;
  num2 :number=4;

// Image url
image:string = '/logo.png';

//for event binding
hello(){
  prompt("Say Hello");
}


// For two way binding 
user = {
    name: "Alain",
    job: "dev"
  }
}
