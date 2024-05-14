import { RouterModule, Routes } from "@angular/router";
import { StudentProfilePageComponent } from "./student-profile-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: '',
      component: StudentProfilePageComponent,
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  StudentRouterModule {}