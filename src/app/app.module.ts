import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './books/book/book.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, BooksModule, AuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
