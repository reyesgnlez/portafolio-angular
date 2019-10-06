import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',                   //nombre del selector que es lo que tenemos que usar para llamarlo en nuestro index que llama app.component.html
  templateUrl: './header.component.html',   //plantilla donde ponemos q queremos q aparezca
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService,
               private router: Router) { }

  ngOnInit() {
  }

  buscarProducto ( termino:string ){
    
    if ( termino.length < 1 ){
      return;
    }
    
    this.router.navigate(['/search', termino]);
    
  }
}
