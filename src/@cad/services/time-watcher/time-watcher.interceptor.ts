import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { map, Observable } from "rxjs";
import { TimeWatcherService } from "@cad/services/time-watcher/time-watcher.service";

@Injectable()
export class TimeWatcherInterceptor implements HttpInterceptor {
  /**
   * Constructor
   */
  constructor(private _timeWatcherService: TimeWatcherService) {}

  /**
   * Intercept
   *
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          // console.log(event.headers);
          if (event.headers.has("date")) {
            const serverTime = new Date(event.headers.get("date"));
            let serverDate = serverTime.getUTCDate();
            const serverMonth = serverTime.getUTCMonth();
            const serverYear = serverTime.getUTCFullYear();
            let serverHour: number = serverTime.getUTCHours();
            serverHour = serverHour + 8;
            const serverMinutes = serverTime.getUTCMinutes();

            if (serverHour > 24) {
              serverHour = serverHour - 24;
              serverDate = serverDate + 1;
            }

            const localTime = new Date();
            const localDate = localTime.getDate();
            const localMonth = localTime.getMonth();
            const localYear = localTime.getFullYear();
            const localHour = localTime.getHours();
            const localMinutes = localTime.getMinutes();

            // console.log(`Day: ${serverDate} : ${localDate}`);
            // console.log(`Month: ${serverMonth} : ${localMonth}`);
            // console.log(`Year: ${serverYear} : ${localYear}`);
            // console.log(`Hour: ${serverHour} : ${localHour}`);
            // console.log(`Minute: ${serverMinutes} : ${localMinutes}`);

            if (
              serverDate === localDate &&
              serverMonth === localMonth &&
              serverYear === localYear &&
              serverHour === localHour &&
              serverMinutes === localMinutes
            ) {
              this._timeWatcherService.hide();
            } else {
              this._timeWatcherService.show();
            }
          }
        }
        return event;
      })
    );
  }
}
