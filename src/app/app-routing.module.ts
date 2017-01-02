import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscoResultsComponent } from './escos/escos.component';
import { AboutComponent } from './about/about.component'
import { TheBestEscoComponent } from './the-best-esco/the-best-esco.component';
import { EscoComparerComponent } from './esco-comparer/esco-comparer.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/escocompare',
    pathMatch: 'full'
  },
  {
    path: 'escos',
    component: EscoResultsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'escoreview',
    component: TheBestEscoComponent
  },
  {
    path: 'escocompare',
    component: EscoComparerComponent
  },
  {
    path: 'newsfeed',
    component: NewsfeedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [EscoResultsComponent, AboutComponent];