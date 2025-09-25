import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingModule } from './feature/training/training.module';
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrainingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
