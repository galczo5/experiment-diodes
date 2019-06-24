import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-diode',
  templateUrl: './diode.component.html',
  styleUrls: ['./diode.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiodeComponent implements OnInit {

  @Input()
  color: string = 'red';

  constructor() { }

  getBoxShadow(): string {
    return `0 0 10px ${this.color}`;
  }

  ngOnInit() {
  }

}
