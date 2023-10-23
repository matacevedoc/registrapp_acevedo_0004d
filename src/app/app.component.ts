import { Component } from '@angular/core';


interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes: Componente[]=[
    {
      name:'Inicio',
      icon:'id-card-outline',
      redirecTo:'/inicio'
    },
    /*{
      name:'Alert',
      icon:'cafe-outline',
      redirecTo:'/alert'
    },*/
    /*{
      name:'Action-Sheet',
      icon:'bug-outline',
      redirecTo:'/action-sheet'
    },*/
    /*{
      name:'Card',
      icon:'sunny-outline',
      redirecTo:'/card'
    },*/
    /*{
      name:'Registro',
      icon:'person-add-outline',
      redirecTo:'/formulario'
    },*/
    {
    name:'¿Quiénes Somos?',
      icon:'help-circle-outline',
      redirecTo:'/quienessomos'
    },
    {
      name:'feriados considerados',
      icon:'calendar-number-outline',
      redirecTo:'/fechasfer'
    },
    {
      name:'Cerrar Sesión',
      icon:'log-in-outline',
      redirecTo:'/iniciosesion'
    },
    
    /*{
      name:'Registrar Asistencia',
      icon:'qr-code-outline',
      redirecTo:'/escaneoqr'
    },*/

  ]
}
