import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const app_routes: Routes = [
    {path: 'home', component: PortafolioComponent},  //cuando la ruta esté vacia se va a portafoliocomponent,
    {path: 'about', component: AboutComponent},  //cuando en la ruta ponga about se va a aboutcomponent,
    {path: 'item/:id', component: ItemComponent},  //cuando la ruta ponga item se va a item,
    {path: 'search/:termino', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}  //cuando ponga cualquier otra cosa lo vamos a redirigir a el vacio que es lo mismo que portafolio
];



@NgModule({
    imports: [
        RouterModule.forRoot (app_routes, {useHash: true})  //poner useHash: true cuando no tenemos acceso al archivo htaccess
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule{

}