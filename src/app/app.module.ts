import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TopBarComponent,
    FooterComponent,
    BlogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
