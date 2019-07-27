import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {
  @Input()
  public message: string;

  @Input()
  public isVisible: false;

  @Output() closeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public hide() {
    console.log("Emit close event...");
    this.closeEvent.emit();
  }
}
