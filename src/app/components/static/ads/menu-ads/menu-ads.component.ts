import { Component, OnInit } from '@angular/core';
import { LangService } from '../../../../services/lang/lang.service';
@Component({
  selector: 'app-menu-ads',
  templateUrl: './menu-ads.component.html',
  styleUrls: ['./menu-ads.component.css']
})
export class MenuAdsComponent implements OnInit {
  public URL_PATH: string = '';
  public URL_VIEW: string = '';
  constructor(private _lang: LangService) { }

  ngOnInit() {
    this.URL_VIEW = window.location.href;
  }
  ChangeLanguage(lang: string): void {
    this._lang.LangDefault.language = lang;
  }
}
