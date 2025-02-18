import { HttpClient, HttpHandler, HttpXhrBackend } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptor, HttpRequest, HttpHandler as AngularHttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: AngularHttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      timeout(200000), // Set timeout value here (e.g., 10000 ms = 10 seconds)
      catchError(err => {
        if (err instanceof TimeoutError) {
          return throwError(() => new Error('Request timed out'));
        }
        return throwError(() => err);
      })
    );
  }
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }
  ]
})
export class HttpClientTimeoutModule {}