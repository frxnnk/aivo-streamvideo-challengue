import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';
@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
      AuthModule.forRoot({
        domain: 'dev-41h-z2e6.us.auth0.com',
        clientId: 'qTyBdDgtGO2ZfZdvg4RpGljKafGtaEem',
        cacheLocation: 'localstorage',
        useRefreshTokens: true
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
