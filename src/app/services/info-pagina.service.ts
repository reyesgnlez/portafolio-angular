import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada =false;
  equipo: any[] = [];

  constructor( private http: HttpClient) { 
      console.log('Servicio de infoPagina Listo');
      
        this.cargarInfo();   
        this.cargarEquipo();         
  }

  private cargarInfo(){
      //Leer el archivo JSON
      this.http.get ('assets/data/data-pagina.json')
      .subscribe ((resp:InfoPagina) => {
        this.cargada = true;
        this.info = resp;
       // console.log (resp ['titulo']);    //Así solo muestra el título
       // console.log (resp ['email']);     //Así solo muestra el email
      });
  } 

  private cargarEquipo(){
    //Leer el archivo JSON
    this.http.get ('https://angular-html-ec9b1.firebaseio.com/equipo.json')   
    .subscribe ((resp: any[]) => {
      this.equipo = resp;
      //console.log(resp);        //Muestra todos los datos que hay en el archivo JSON  
    });
  }

}
