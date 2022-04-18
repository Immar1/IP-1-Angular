import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteMainComponent } from './quote-main/quote-main.component';
import { DatePipePipe } from './pipes';
import { FormComponent } from './form/form.component';
import { HighlightQouteDirective } from './quote-directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteMainComponent,
    DatePipePipe,
    FormComponent,
    HighlightQouteDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
