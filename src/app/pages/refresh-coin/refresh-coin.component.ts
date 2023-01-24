import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-refresh-coin',
  templateUrl: './refresh-coin.component.html',
  styleUrls: ['./refresh-coin.component.css']
})
export class RefreshCoinComponent {

  @Input() text = "EEEEE";
  @Output() close = new EventEmitter<void>();

}
