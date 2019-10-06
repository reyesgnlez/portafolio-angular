import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  producto: ProductoDescripcion;  //declaro de variable producto que va tener lo que contiene ProductoDescripcion
  id: string;                     //declaro variable id que va a contener un string, abajo le digo de donde cogerlo

  constructor( private route: ActivatedRoute, public ProductosService:ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      //console.log(parametros['id']);
      this.ProductosService.getProducto(parametros['id'])
        .subscribe ( (producto: ProductoDescripcion) => {
          //console.log (producto);
          this.producto=producto;        //le digo que producto va contener todo lo que tenga producto, no un único valor
          this.id= parametros ['id'];   //le digo que id va a tener el parametro de 'id'
        })
    })
  }

}
