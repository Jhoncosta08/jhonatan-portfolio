import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-simple-button',
  imports: [NgClass, RouterLinkActive],
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss', '../../shared/hover-effects.scss']
})
export class SimpleButtonComponent {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() buttonText: string = 'Button';
  @Input() isOutlined: boolean = false;
  @Input() isActive: boolean = false;
}
