import { Injectable } from '@angular/core';
import { LanguageDefault } from '../../classes/lang.class';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  public LangDefault: LanguageDefault;
  constructor() { }
}
