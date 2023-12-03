import {inject, Injectable} from '@angular/core';
import {Logging} from "../../models/logs";
import {LogsService} from "./logs.service";

@Injectable({
  providedIn: 'root'
})
export class SendLogService {

  _logService = inject(LogsService)

  sendLog(content: string) {
    const newLog: Logging = {
      route_action: location.pathname,
      content: `${content}`,
      status_code: 200,
      client_host: location.host,
      datum_vnosa: new Date().toISOString(),
    };

    this._logService.addNewLogAdmin(newLog).subscribe(
      () => {
      },
      (error) => {
        console.error('Error sending log:', error);
      }
    );
  }
}
