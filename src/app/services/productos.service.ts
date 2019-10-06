import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  cargando = true;
  productos: Producto [] = [];
  productosFiltrado: Producto[]=[];
  
  constructor( private http: HttpClient) {

    this.cargarProductos();

   }

  private cargarProductos (){
    
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-ec9b1.firebaseio.com/productos_idx.json')
      .subscribe (( resp: Producto[]) => {
        console.log(resp);
        this.productos = resp;
        setTimeout(() => {
          this.cargando = false;
          resolve();
        }, 1000);

      });



    });    
  }

  getProducto( id: string) {      //creamos un metodo que va a recibir un dato, en esta caso "id", de tipo string
    return this.http.get(`https://angular-html-ec9b1.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto (termino:string){
    if (this.productos.length === 0){
      //cargar producto
      this.cargarProductos ().then( () => {
        //ejecutar después de terner los productos
        //Aplicar el filtro
        this.filtrarProductos (termino);
      });
    } else{
      //aplicar el filtro
      this.filtrarProductos (termino);
    }

  }
    private filtrarProductos (termino:string){
      this.productosFiltrado = [];
      termino = termino.toLocaleLowerCase ();   //pasamos el termino a minúscula para que no sea sensible a mayúsculas o minúsculas

      this.productos.forEach (prod => {
        const tituloLower = prod.titulo.toLocaleLowerCase();    //creamos una constante temporal que recoge la busqueda y la pone en minúscula
        if ( prod.categoria.indexOf (termino) >=0 || tituloLower.indexOf(termino) >= 0 ){
          this.productosFiltrado.push (prod);
        }
      });
    }
}
