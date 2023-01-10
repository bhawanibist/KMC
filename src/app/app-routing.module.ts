import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApangParichayaComponent } from './apang-parichaya/apang-parichaya.component';
import { BazarBewasthapanComponent } from './bazar-bewasthapan/bazar-bewasthapan.component';
import { HomeComponent } from './home/home.component';
import { KaryakaramBudgetComponent } from './karyakaram-budget/karyakaram-budget.component';
import { KrishiAnudanComponent } from './krishi-anudan/krishi-anudan.component';
import { NyaayikSamitiComponent } from './nyaayik-samiti/nyaayik-samiti.component';
import { RajaswoSamitiComponent } from './rajaswo-samiti/rajaswo-samiti.component';
import { SanitaryPadComponent } from './sanitary-pad/sanitary-pad.component';

const routes: Routes = [
 {
  path: 'nyaayik-samiti', component: NyaayikSamitiComponent
 },
 {
  path: 'rajaswo-samiti', component: RajaswoSamitiComponent
 },
 {
  path: 'karyakaram-budget', component: KaryakaramBudgetComponent
 },
 {
  path: 'bazar-bewasthapan', component: BazarBewasthapanComponent
 },
 {
  path: 'apang-parichaya', component: ApangParichayaComponent
 },
 {
  path: 'sanitary-pad', component: SanitaryPadComponent
 },
 {
  path: 'krishi-anudan', component: KrishiAnudanComponent
 },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
