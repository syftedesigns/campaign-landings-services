import { Component, OnInit } from '@angular/core';
import { SizeDevice } from 'src/app/classes/window.class';
import { MatBottomSheet } from '@angular/material';
import { ParticleStyle, ParticleConfigMobile, ParticleConfigDesktop } from 'src/app/environments/particles.config';
import { SpanishModalComponent } from '../../../modal-locator/modals/lang/spanish-modal/spanish-modal.component';
import { LangService } from '../../../../../services/lang/lang.service';
import { LanguageDefault } from 'src/app/classes/lang.class';
import { ModalLocatorComponent } from '../../../modal-locator/modals/modal-locator.component';

@Component({
  selector: 'app-spanish-locator',
  templateUrl: './spanish-locator.component.html',
  styleUrls: ['./spanish-locator.component.css']
})
export class SpanishLocatorComponent implements OnInit {
  Device: SizeDevice;
  public ParticleStyle: object = {};
  public particles: object | any = {};
  public width: number = 100;
  public height: number = 100;
  constructor(private bottomSheet: MatBottomSheet, public _lang: LangService) { }

  ngOnInit() {
    this.Device = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    if (this.Device.width <= 480) {
      this.ParticleStyle = ParticleStyle;
      this.particles = ParticleConfigMobile;
    } else {
      this.ParticleStyle = ParticleStyle;
      this.particles = ParticleConfigDesktop;
    }
    // Detectamos el idioma del navegador
    if (window.navigator.language.indexOf('es') >= 0) {
      // Si es en español, el defecto será español
      this._lang.LangDefault = new LanguageDefault('es');
      // Si es en ingles
    } else if (window.navigator.language.indexOf('en') >= 0) {
      this._lang.LangDefault = new LanguageDefault('en');
      // Algún otro idioma que no sea ingles o español
    } else {
      this._lang.LangDefault = new LanguageDefault('en');
    }
    console.log(this._lang.LangDefault.language);
  }
OpenAssistant(modalLanguage: LanguageDefault): void {
  console.log(modalLanguage);
  // desplegamos el asistente según el idioma establecido
  let assistant;
  switch (modalLanguage.language) {
    case 'en':
      assistant = this.bottomSheet.open(ModalLocatorComponent, {
        disableClose: false,
        autoFocus: false
      });
      assistant.afterDismissed().subscribe(
        (serviceSelected: string): void => {
          console.log(serviceSelected);
        }
      );
    break;
    case 'es':
        assistant = this.bottomSheet.open(SpanishModalComponent, {
          disableClose: false,
          autoFocus: false
        });
        assistant.afterDismissed().subscribe(
          (serviceSelected: string): void => {
            console.log(serviceSelected);
          }
        );
      break;
  }
}
}
