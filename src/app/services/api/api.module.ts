/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { IndexService } from './services/index.service';
import { BlogService } from './services/blog.service';
import { LogInService } from './services/log-in.service';
import { AdminService } from './services/admin.service';
import { OMeniService } from './services/o-meni.service';
import { SamohipnozaService } from './services/samohipnoza.service';
import { MedijstvoService } from './services/medijstvo.service';
import { JasnovidnostService } from './services/jasnovidnost.service';
import { RegresijaService } from './services/regresija.service';
import { HipnoterapijaService } from './services/hipnoterapija.service';
import { GlobalErrorService } from './services/global-error.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    IndexService,
    BlogService,
    LogInService,
    AdminService,
    OMeniService,
    SamohipnozaService,
    MedijstvoService,
    JasnovidnostService,
    RegresijaService,
    HipnoterapijaService,
    GlobalErrorService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
