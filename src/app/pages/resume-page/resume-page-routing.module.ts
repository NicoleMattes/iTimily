import { RouterModule, Routes } from "@angular/router";
import { ResumePageComponent } from "./resume-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: '',
      component: ResumePageComponent,
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResumeRouterModule {}