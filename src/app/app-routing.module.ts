import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './main-pages/news-page/news-page.component';
import { LivingSustainablyComponent } from './main-pages/living-sustainably/living-sustainably.component';

const routes: Routes = [
  { path: 'living-sustainably', component: LivingSustainablyComponent },
  { path: 'news-page', component: NewsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
