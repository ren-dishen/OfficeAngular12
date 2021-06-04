import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'office-js';

if (environment.production) {
  enableProdMode();
}

Office.initialize = ()  => {
  console.log("test")
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
};
