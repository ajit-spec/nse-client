import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {
}
