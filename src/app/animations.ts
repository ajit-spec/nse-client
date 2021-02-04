import {trigger, transition, style, animate, state} from '@angular/animations';

export class Animations {
  static fadeIn = trigger('animation2', [
    state('state3', style({
      opacity: 1,
      transform: 'scale(1)'
    })),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'scale(0)'

      }),
      animate('1000ms ease-in-out')
    ])

  ]);
}
