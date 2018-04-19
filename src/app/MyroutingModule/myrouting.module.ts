import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { DetailComponent } from '../components/detail/detail.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

// added by AT
const routetables = [

  {path: 'list', component: ProductsListComponent},
  {path: 'list/:id', component: DetailComponent},
  {path: 'list/:add', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
  ];


@NgModule({
  declarations: [
     ],
  imports: [
     RouterModule.forRoot(routetables, { useHash: false})
  ],
  exports : [RouterModule],
  providers: [],
  bootstrap: []
})
export class MyRoutingModule { }

