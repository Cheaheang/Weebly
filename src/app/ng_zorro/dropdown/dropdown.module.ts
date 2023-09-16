import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule, NzDropdownButtonDirective } from 'ng-zorro-antd/dropdown';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NzDropDownModule,

   ],
   exports:[


   ]
})
export class DropdownModule { }
