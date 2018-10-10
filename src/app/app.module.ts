import { GurdGuard } from './service/gurd/gurd.guard';
import { Md5 } from 'ts-md5';
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
import { AccountViewComponent } from './account-view/account-view.component';
import { CookieService } from 'ngx-cookie-service';
import { AccountEntryComponent } from './account-entry/account-entry.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';
import { EditComponent } from './edit/edit.component';
import { HistoryComponent } from './history/history.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdministrationComponent } from './administration/administration.component';
import { PrintSectionComponent } from './print-section/print-section.component';
import { StatementViewComponent } from './statement-view/statement-view.component';
import { StatementSummaryComponent } from './statement-summary/statement-summary.component';
import { InOutComponent } from './in-out/in-out.component';
import { SidebarModule } from 'primeng/components/sidebar/sidebar';
import { StockComponent } from './stock/stock.component';
import { DialogModule } from 'primeng/dialog';
import { TimeDateID } from './stock/timeDateID';
import {AutoCompleteModule} from 'primeng/autocomplete';

// App Route
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'print-oder', component: PrintRequestComponent, canDeactivate: [GurdGuard] },
  { path: 'account-view', component: AccountViewComponent },
  { path: 'account-entry', component: AccountEntryComponent },
  { path: 'search', component: SearchComponent },
  { path: 'edit', component: EditComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'print', component: InvoiceComponent },
  { path: 'index', component: IndexPageComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'admin', component: AdministrationComponent },
  { path: 'print-details', component: PrintSectionComponent },
  { path: 'in-out', component: InOutComponent },
  { path: 'stock', component: StockComponent },
  { path: 'summary', component: StatementSummaryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavbarComponent,
    PrintRequestComponent,
    AccountViewComponent,
    AccountEntryComponent,
    SearchComponent,
    EditComponent,
    HistoryComponent,
    InvoiceComponent,
    LoginComponent,
    LogoutComponent,
    AdministrationComponent,
    PrintSectionComponent,
    StatementViewComponent,
    StatementSummaryComponent,
    InOutComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    HttpModule,
    CalendarModule,
    ToastModule,
    ConfirmDialogModule,
    SidebarModule,
    DialogModule,
    Ng2GoogleChartsModule,
    AutoCompleteModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        useHash: true
      },
    )
  ],
  providers: [
    SqlService,
    CookieService,
    MessageService,
    ConfirmationService,
    GurdGuard,
    Md5,
    TimeDateID
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
