import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-text-list',
  imports: [
    NgForOf
  ],
  templateUrl: './text-list.component.html',
  styleUrl: './text-list.component.scss'
})
export class TextListComponent {
  @Input() textList: string[] = [];
}
