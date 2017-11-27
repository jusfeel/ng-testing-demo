import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureComponent } from './feature/feature.component';
import { FeatureService } from './feature.service';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ FeatureService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
