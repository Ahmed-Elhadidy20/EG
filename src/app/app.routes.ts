import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { BusinessSolutionsComponent } from './business-solutions/business-solutions.component';
import { HomeComponent } from './home/home.component';
import { PaegNotFoundeComponent } from './paeg-not-founde/paeg-not-founde.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WebDevolopmentComponent } from './web-devolopment/web-devolopment.component';
import { ContacUsComponent } from './contac-us/contac-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ServesComponent } from './serves/serves.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { MediaProductionComponent } from './media-production/media-production.component';

export const  routes: Routes = [
  { path: 'home', component: HomeComponent },
    { path: 'digital-marketing', component: DigitalMarketingComponent },
  { path: 'web-development', component: WebDevolopmentComponent },
  { path: 'business-solutions', component: BusinessSolutionsComponent },
  { path: 'contact', component: ContacUsComponent },
  { path: 'About', component: AboutUsComponent },
  { path: 'Our-Services', component: OurServicesComponent },
  { path: 'Our', component: OurServicesComponent },
  { path: 'Services', component: ServesComponent },
  { path: 'graphic-design', component: GraphicDesignComponent },
  { path: 'mediaPro', component: MediaProductionComponent },
  { path: 'Cyber', component: CyberSecurityComponent },
  { path: '', pathMatch:"full", redirectTo:'/home'},
  {path:'**' , component: PaegNotFoundeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ],
  exports: [RouterModule]
})
export class AppModule { }