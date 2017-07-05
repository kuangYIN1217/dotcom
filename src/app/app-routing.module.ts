import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {TextDemoComponent} from "./text_demo/text_demo.component";
const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'text_demo', component: TextDemoComponent },
  { path: '', redirectTo: '/text_demo', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
