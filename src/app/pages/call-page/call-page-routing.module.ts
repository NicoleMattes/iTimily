import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallPageComponent } from './call-page.component';

const routes: Routes = [
    {
      path: '',
      component: CallPageComponent,
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CallRouteModule {}