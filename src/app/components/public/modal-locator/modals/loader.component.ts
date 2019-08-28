import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styles: []
})
export class LoaderComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoaderComponent>,
    @Inject(MAT_DIALOG_DATA) public _path: string) { }

  ngOnInit() {
    setTimeout(() => {
      this.dialogRef.close(true);
      location.href = `https://www.syftedesigns.com/${this._path}`;
    }, 1000);
  }

}
