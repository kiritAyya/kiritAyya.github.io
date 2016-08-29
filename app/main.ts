import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component'
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

