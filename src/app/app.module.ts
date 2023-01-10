import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NyaayikSamitiComponent } from './nyaayik-samiti/nyaayik-samiti.component';
import { RajaswoSamitiComponent } from './rajaswo-samiti/rajaswo-samiti.component';
import { BazarBewasthapanComponent } from './bazar-bewasthapan/bazar-bewasthapan.component';
import { KaryakaramBudgetComponent } from './karyakaram-budget/karyakaram-budget.component';
import { ApangParichayaComponent } from './apang-parichaya/apang-parichaya.component';
import { SanitaryPadComponent } from './sanitary-pad/sanitary-pad.component';
import { KrishiAnudanComponent } from './krishi-anudan/krishi-anudan.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NyaayikSamitiComponent,
    RajaswoSamitiComponent,
    BazarBewasthapanComponent,
    KaryakaramBudgetComponent,
    ApangParichayaComponent,
    SanitaryPadComponent,
    KrishiAnudanComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
