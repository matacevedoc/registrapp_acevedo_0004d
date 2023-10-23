import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.page.html',
  styleUrls: ['./quienessomos.page.scss'],
})
export class QuienessomosPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

}
