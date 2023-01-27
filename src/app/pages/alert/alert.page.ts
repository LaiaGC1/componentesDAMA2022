import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo = '';

  constructor(private alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async mostrarAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Titulo del alert',
      subHeader: 'Subtitulo',
      message: 'Esto e s un mensaje de alerta',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancel pulsado')
        }
      },{
        text: 'OK',
        handler: () => {
          console.log('OK pulsado')
        }
      },]
    });
    await alert.present();
  }


  async mostrarInput() {
    const alert = await this.alertCtrl.create({
      header: 'Alert con Input',
      subHeader: 'inserte el nombre',
      inputs: [{
        name: 'Nombre',
        type: 'text',
        placeholder: 'Escribe el nombre'
      },{
        name: 'Apellido',
        type: 'text',
        placeholder: 'Escribe el nombre'
      },],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancel pulsado')
        }
      },{
        text: 'OK',
        handler: (datos) => {
          console.log('OK pulsado', datos);
          this.titulo = datos.Nombre + ' ' + datos.Apellido;
        }
      },]
    });
    await alert.present();
  }
}
