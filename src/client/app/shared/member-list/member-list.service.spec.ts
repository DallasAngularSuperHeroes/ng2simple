import { provide, ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, HTTP_PROVIDERS, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { MemberListService } from './name-list.service';

export function main() {
  describe('MemberList Service', () => {
    let nameListService: MemberListService;
    let backend: MockBackend;
    let initialResponse: any;

    beforeEach(() => {
      let injector = ReflectiveInjector.resolveAndCreate([
        HTTP_PROVIDERS,
        MemberListService,
        BaseRequestOptions,
        MockBackend,
        provide(Http, {
          useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }),
      ]);
      nameListService = injector.get(MemberListService);
      backend = injector.get(MockBackend);

      let connection: any;
      backend.connections.subscribe((c: any) => connection = c);
      initialResponse = nameListService.get();
      connection.mockRespond(new Response(new ResponseOptions({ body: '["Dijkstra", "Hopper"]' })));
    });

    it('should return an Observable when get called', () => {
      expect(initialResponse).toEqual(jasmine.any(Observable));
    });

    it('should resolve to list of names when get called', () => {
      let names: any;
      initialResponse.subscribe((data: any) => names = data);
      expect(names).toEqual(['Dijkstra', 'Hopper']);
    });
  });
}
