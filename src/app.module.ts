import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [MatTabsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
