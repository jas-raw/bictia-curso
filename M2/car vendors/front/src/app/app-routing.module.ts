import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoComponent } from './go/go.component';
import { HelpComponent } from './help/help.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'go',
    component: GoComponent
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
