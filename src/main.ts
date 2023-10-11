import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {registerLocaleData} from '@angular/common';
import localeSl from '@angular/common/locales/sl';
import {AppModule} from './app/app.module';

// Register the Slovenian locale data.
registerLocaleData(localeSl, 'sl');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
