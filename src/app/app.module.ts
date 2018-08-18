import { Md5 } from 'ts-md5';
import { CartListService } from './service/cart-list/cart-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrintRequestComponent } from './print-request/print-request.component';
import { HttpModule } from '@angular/http';
import { SqlService } from './service/sql/sql.service';

// App Route
const appRoutes: Routes = [
  { path: '', component: IndexPageComponent},
  { path: 'print-oder', component: PrintRequestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavbarComponent,
    PrintRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  providers: [
    CartListService,
    SqlService,
    Md5
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
