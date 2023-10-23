import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


/*interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  /*componentes: Componente[]=[
    {
      name:'Alert',
      icon:'cafe-outline',
      redirecTo:'/alert'
    },
    {
      name:'Action-Sheet',
      icon:'bug-outline',
      redirecTo:'/action-sheet'
    },
    {
      name:'Card',
      icon:'sunny-outline',
      redirecTo:'/card'
    },*/





  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
