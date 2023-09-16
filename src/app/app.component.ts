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
      // state('in', style({
      //   width: '*',
      //   transform: 'translateY(0),translateX(-82px)', opacity: 1
      // })),
      // transition(':enter', [
      //   style({ width: 100,margin:140, transform: 'translateY(-32px)', opacity: 0 }),
      //   group([
      //     animate('1.0s 0.1s ease', style({
      //       transform: 'translateY(-32px)',
      //       width: '10px'
      //     })),
      //     animate('1.3s 0.1s ease', style({
      //       opacity: 1
      //     }))
      //   ])
      // ]),
      // transition(':leave', [
      //   group([
      //     animate('2s 0.2s ease', style({
      //       transform: 'translateY(-32px)',
      //       width: 320
      //     })),
      //     animate('2.3s 0.4s ease', style({
      //       opacity: 0
      //     }))
      //   ])
      // ]),

        state('in', style({ transform: 'translateY(0)' })),
        transition('void => *', [
          style({ transform: 'translateY(30%)' }),
          animate('2.3s 0.4s ease')
        ]),


    ])
  ],


})

export class AppComponent {
  title = 'weebly_website';

}
