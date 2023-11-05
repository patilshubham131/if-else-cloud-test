import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent {

  @Input() percentage:string = '';
  @Input() firstHeader = '';;
  @Input() secondHeader = '';
  @Input() iconIndex = 0;

  topCardIcons = ['bi bi-music-note-beamed ','bi bi-pie-chart', 'bi bi-download', 'bi bi-arrow-clockwise']
}
