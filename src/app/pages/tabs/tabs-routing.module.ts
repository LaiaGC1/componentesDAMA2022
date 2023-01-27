import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'',
        redirectTo:'account',
        pathMatch:"full"
      },
      {
        path:'account',
        loadChildren: () => import('../grid-buttons/grid-buttons.module').then( m => m.GridButtonsPageModule)
      },
      {
        path: 'slides2',
        loadChildren: () => import('../slides2/slides2.module').then( m => m.Slides2PageModule)
      },
      {
        path: 'listas',
        loadChildren: () => import('../listas/listas.module').then( m => m.ListasPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
