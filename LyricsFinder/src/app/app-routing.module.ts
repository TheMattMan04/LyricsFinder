import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LyricsComponent } from './lyrics/lyrics.component';
import { SearchHistoryComponent } from './search-history/search-history.component';

const routes: Routes = [
  { path: '', component: LyricsComponent },
  { path: 'history', component: SearchHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
