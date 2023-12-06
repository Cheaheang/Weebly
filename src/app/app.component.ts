  import { Component } from '@angular/core';
  import { HostBinding } from '@angular/core';
  import {
    trigger,
    state,
    style,
    animate,
    transition,
    group,
    // ...
  } from '@angular/animations';
  import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
   selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
     
  ],
  animations: [

    trigger('flyInOut', [ 

        state('in', style({ transform: 'translateY(0)' })),
        transition('void => *', [
          style({ transform: 'translateY(30%)' }),
          animate('2.3s 0.4s ease')
        ]),


    ]),

    trigger('moveLeftSideway', [ 
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(20%)' }),
        animate('2.3s 0.4s ease')
      ]),
  ]),

  trigger('moveRightSideway', [ 
    state('in', style({ transform: 'translateY(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-20%)' }),
      animate('2.3s 0.4s ease')
    ]),
])
  
  ],


})

export class AppComponent {
  // title = 'weebly_website';
  imagePic = './assets/weebly_graph.jpg';
}
