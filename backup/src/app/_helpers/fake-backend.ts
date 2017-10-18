import {
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  RequestMethod,
  XHRBackend,
  RequestOptions
} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
  // array in local storage for registered users
  const users = [
    {id: '1', gender: 'male', firstName: 'Angel', lastName: 'Yordanov'},
    {id: '2', gender: 'male', firstName: 'Ivo', lastName: 'Mishev'},
    {id: '3', gender: 'female', firstName: 'Vania', lastName: 'Ivanova'}
  ];

  // configure fake backend
  backend.connections.subscribe((connection: MockConnection) => {
    setTimeout(() => {
      if (connection.request.url.match('/api/users') && connection.request.method === RequestMethod.Get) {
        connection.mockRespond(new Response(new ResponseOptions({status: 200, body: users})));
        return;
      }

      // pass through any requests not handled above
      const realHttp = new Http(realBackend, options);
      const requestOptions = new RequestOptions({
        method: connection.request.method,
        headers: connection.request.headers,
        body: connection.request.getBody(),
        url: connection.request.url,
        withCredentials: connection.request.withCredentials,
        responseType: connection.request.responseType
      });
      realHttp.request(connection.request.url, requestOptions)
        .subscribe((response: Response) => {
            connection.mockRespond(response);
          },
          (error: any) => {
            connection.mockError(error);
          });

    }, 500);

  });

  return new Http(backend, options);
};

export let fakeBackend = {
  // use fake backend in place of Http service for backend-less development
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
