import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FechasFeriadas } from '../../interfaces/interfaces'; 
import { FeriadosService } from '../../services/feriadoss.service'; 
@Component({
  selector: 'app-fechasfer',
  templateUrl: './fechasfer.page.html',
  styleUrls: ['./fechasfer.page.scss'],
})
export class FechasferPage implements OnInit {

  feriadoss: FechasFeriadas[] = [];

  constructor(private feriadosservice: FeriadosService,
    private menuController: MenuController) { }

    ngOnInit() {
        this.feriadosservice.getTopHeadlines().subscribe(resp => {
          console.log('feriados', resp);
          this.feriadoss.push(...resp.data)
        })
    }
   mostrarMenu(){
     this.menuController.open('first');
   }

}
