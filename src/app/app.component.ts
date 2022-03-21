import { NgIf } from '@angular/common';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: <button (click)="visible"=!"visible">Toggle</button>
  <h1 *NgIf="visible">hello world"</h1>
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  visible=true;
}
