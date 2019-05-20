import { Component, OnInit } from '@angular/core';
import { SizeDevice } from 'src/app/classes/window.class';
import { ParticleStyle, ParticleConfigMobile, ParticleConfigDesktop } from 'src/app/environments/particles.config';
import { MatBottomSheet } from '@angular/material';
import { ModalLocatorComponent } from '../modal-locator/modals/modal-locator.component';

@Component({
  selector: 'app-services-locator',
  templateUrl: './services-locator.component.html',
  styleUrls: ['./services-locator.component.css']
})
export class ServicesLocatorComponent implements OnInit {
  Device: SizeDevice;
  public ParticleStyle: object = {};
  public particles: object | any = {};
  public width: number = 100;
  public height: number = 100;
  constructor(private bottomSheet: MatBottomSheet) { }

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
  }
OpenAssistant(): void {
  const assistant = this.bottomSheet.open(ModalLocatorComponent, {
    disableClose: false,
    autoFocus: false
  });
  assistant.afterDismissed().subscribe(
    (serviceSelected: string): void => {
      console.log(serviceSelected);
    }
  );
}
}
