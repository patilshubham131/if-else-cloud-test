import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent {
  @Input() data: Order = {
    id: '',
    delivery_date: '',
    name: '',
    product:'',
    shipping: false,
    status: '',
    tracking_no: ''
  };
  constructor(public activeModal: NgbActiveModal) { }
  
}
