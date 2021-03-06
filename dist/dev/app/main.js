"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
if ('dev' === 'prod') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })
]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQseUNBQTBCLG1DQUFtQyxDQUFDLENBQUE7QUFDOUQsdUJBQWlDLGlCQUFpQixDQUFDLENBQUE7QUFFbkQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFFL0MsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFBQyxxQkFBYyxFQUFFLENBQUM7QUFBQyxDQUFDO0FBUWxELG9DQUFTLENBQUMsNEJBQVksRUFBRTtJQUN0Qix5QkFBZ0I7SUFDaEIsY0FBTyxDQUFDLHNCQUFhLEVBQUUsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztDQUN4RCxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlLCBwcm92aWRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbmlmICgnPCU9IEVOViAlPicgPT09ICdwcm9kJykgeyBlbmFibGVQcm9kTW9kZSgpOyB9XG5cbi8qKlxuICogQm9vdHN0cmFwcyB0aGUgYXBwbGljYXRpb24gYW5kIG1ha2VzIHRoZSBST1VURVJfUFJPVklERVJTXG4gKiBhbmQgdGhlIEFQUF9CQVNFX0hSRUYgYXZhaWxhYmxlIHRvIGl0LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L2FwaS9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvaW5kZXgvYm9vdHN0cmFwLWZ1bmN0aW9uLmh0bWxcbiAqL1xuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xuICBST1VURVJfUFJPVklERVJTLFxuICBwcm92aWRlKEFQUF9CQVNFX0hSRUYsIHsgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nIH0pXG5dKTtcblxuLy8gSW4gb3JkZXIgdG8gc3RhcnQgdGhlIFNlcnZpY2UgV29ya2VyIGxvY2F0ZWQgYXQgXCIuL3dvcmtlci5qc1wiXG4vLyB1bmNvbW1lbnQgdGhpcyBsaW5lLiBNb3JlIGFib3V0IFNlcnZpY2UgV29ya2VycyBoZXJlXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvU2VydmljZV9Xb3JrZXJfQVBJL1VzaW5nX1NlcnZpY2VfV29ya2Vyc1xuLy9cbi8vIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4vLyAgICg8YW55Pm5hdmlnYXRvcikuc2VydmljZVdvcmtlci5yZWdpc3RlcignLi93b3JrZXIuanMnKS50aGVuKChyZWdpc3RyYXRpb246IGFueSkgPT5cbi8vICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSkpXG4vLyAgICAgLmNhdGNoKChlcnI6IGFueSkgPT5cbi8vICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycikpO1xuLy8gfVxuIl19
