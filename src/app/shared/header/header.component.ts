import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',                   //nombre del selector que es lo que tenemos que usar para llamarlo en nuestro index que llama app.component.html
  templateUrl: './header.component.html',   //plantilla donde ponemos q queremos q aparezca
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
