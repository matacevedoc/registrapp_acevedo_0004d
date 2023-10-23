import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-escaneoqr',
  templateUrl: './escaneoqr.page.html',
  styleUrls: ['./escaneoqr.page.scss'],
})
export class EscaneoqrPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  
  mostrarMenu(){
    this.menuController.open('first');
  }
}
