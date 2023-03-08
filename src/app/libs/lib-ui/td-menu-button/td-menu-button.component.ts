import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-td-menu-button',
  templateUrl: './td-menu-button.component.html',
  styleUrls: ['./td-menu-button.component.scss']
})
export class TdMenuButtonComponent {
 @Input() label!: string;
}
