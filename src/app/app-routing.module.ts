import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'test',component:TestComponent},
  {path:'struct',component: StructuralDirectivesComponent}
];

export const routingComponents = [TestComponent,StructuralDirectivesComponent]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
