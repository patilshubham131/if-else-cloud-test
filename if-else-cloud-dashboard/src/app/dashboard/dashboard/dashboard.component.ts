import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardDataResponse } from 'src/app/models/dashboard-data';
import { ProductModalComponent } from 'src/app/modal/product-modal/product-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private readonly userService: UserServiceService,
    private readonly modalService: NgbModal) { }

  dashboardData: DashboardDataResponse = { new_users: [], recent_orders: [], top_cards: [] };

  ngOnInit() {
    this.userService.getDashboardData().subscribe((result: DashboardDataResponse) => {
      this.dashboardData = result
    })
  }

  openInfoPopup(index: number) {
    const modalRef = this.modalService.open(ProductModalComponent);
    modalRef.componentInstance.data = this.dashboardData.recent_orders[index];
  }

}
