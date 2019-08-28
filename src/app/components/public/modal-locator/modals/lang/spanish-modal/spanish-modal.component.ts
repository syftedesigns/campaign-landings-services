import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoaderComponent } from '../../loader.component';

@Component({
  selector: 'app-spanish-modal',
  templateUrl: './spanish-modal.component.html',
  styleUrls: ['./spanish-modal.component.css']
})
export class SpanishModalComponent implements OnInit {
  canCheck: boolean = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  RedirectModal(service?: string): void {
    const redirectPopup = this.dialog.open(LoaderComponent, {
      disableClose: true,
      data: service
    });
    redirectPopup.afterClosed().subscribe(
      (booleanClose: boolean): void => {
        if (booleanClose) {
          this.canCheck = true;
        }
      }
    );
  }
}
