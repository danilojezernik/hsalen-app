import {inject, Injectable} from '@angular/core';
import {Logging} from "../../models/logs";
import {LogsService} from "./logs.service";

@Injectable({
  providedIn: 'root'
})
export class SendLogService {

  _logService = inject(LogsService)

  sendPrivateLog(content: string, domain: string) {
    const newLog: Logging = {
      route_action: location.pathname,
      content: `${content}`,
      domain: `${domain}`,
      client_host: location.host,
      datum_vnosa: new Date().toISOString(),
    };

    this._logService.addNewPrivateLogAdmin(newLog).subscribe(
      () => {
      },
      (error) => {
        console.error('Error sending log:', error);
      }
    );
  }

  sendPublicLog(content: string, domain: string) {
    const newLog: Logging = {
      route_action: location.pathname,
      content: `${content}`,
      domain: `${domain}`,
      client_host: location.host,
      datum_vnosa: new Date().toISOString(),
    };

    this._logService.addNewPublicLogAdmin(newLog).subscribe(
      () => {
      },
      (error) => {
        console.error('Error sending log:', error);
      }
    );
  }
}
