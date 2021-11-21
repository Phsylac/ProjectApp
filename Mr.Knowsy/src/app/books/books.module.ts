import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksPageRoutingModule } from './books-routing.module';
import { Books1Page } from '../books1/books1.page';
import { BooksPage } from './books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksPageRoutingModule
  ],
  declarations: [BooksPage, Books1Page]
})
export class BooksPageModule {}
