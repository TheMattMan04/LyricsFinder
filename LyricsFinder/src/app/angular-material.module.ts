import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatCardModule
} from "@angular/material";

@NgModule({
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule
  ]
})
export class AngularMaterialModule {}
