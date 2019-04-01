import { Component, OnInit, ViewChild, Injector, PLATFORM_ID, Inject } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModal]
})
export class AppComponent {
  title = 'my-app';
  closeResult: string;
  @ViewChild('bootstrapModal') public bootstrapModal: ModalDirective;

  private modalService: NgbModal
  constructor(@Inject(PLATFORM_ID)
  private platfromId: Object, private injector: Injector) {
      this.modalService = this.injector.get(NgbModal);
  }

  showModal() {
    this.bootstrapModal.show();
  }

  closeModal() {
    this.bootstrapModal.hide();
  }

  openDialog(modalRef) {
    console.log(modalRef);
    
    this.modalService.open(modalRef);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  options = {};
}
