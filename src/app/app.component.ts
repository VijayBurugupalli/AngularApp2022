import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finsor';
  amount=0;
  logincheck(){
    document.write("you are logged in")
  }

}
function finsor(finsor: any) {
  throw new Error('Function not implemented.');
}

