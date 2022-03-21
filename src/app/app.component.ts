import { NgIf } from '@angular/common';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  // stackblitz vuole il codice su una riga, attenzione agli spazi tra i tag
  template:'<button (click)="visible =!visible">Toggle</button> <h1 *ngIf="visible">ciao</h1>',
  //styleUrls: [ './app.component.css' ],
})
export class AppComponent  {
  //name = 'Angular ' + VERSION.major;
  visible=false;
}
