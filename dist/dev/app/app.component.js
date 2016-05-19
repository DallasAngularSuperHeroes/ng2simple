"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var index_1 = require('./+about/index');
var index_2 = require('./+home/index');
var index_3 = require('./+memberList/index');
var index_4 = require('./shared/index');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            viewProviders: [index_4.NameListService, http_1.HTTP_PROVIDERS],
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, index_4.NavbarComponent, index_4.ToolbarComponent]
        }),
        router_1.Routes([
            {
                path: '/',
                component: index_2.HomeComponent
            },
            {
                path: '/members',
                component: index_3.MemberListComponent
            },
            {
                path: '/about',
                component: index_1.AboutComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQTBDLGlCQUFpQixDQUFDLENBQUE7QUFDNUQscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBRTlDLHNCQUErQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2hELHNCQUE4QixlQUM5QixDQUFDLENBRDRDO0FBQzdDLHNCQUFvQyxxQkFFcEMsQ0FBQyxDQUZ3RDtBQUV6RCxzQkFBbUUsZ0JBQWdCLENBQUMsQ0FBQTtBQTZCcEY7SUFBQTtJQUEyQixDQUFDO0lBM0I1QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLENBQUMsdUJBQWUsRUFBRSxxQkFBYyxDQUFDO1lBQ2hELFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztTQUNuRSxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ047Z0JBQ0UsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsU0FBUyxFQUFFLHFCQUFhO2FBQ3pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSwyQkFBbUI7YUFDL0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsc0JBQWM7YUFDMUI7U0FDRixDQUFDOztvQkFBQTtJQU95QixtQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixvQkFBWSxlQUFHLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vK2Fib3V0L2luZGV4JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLytob21lL2luZGV4J1xuaW1wb3J0IHsgTWVtYmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vK21lbWJlckxpc3QvaW5kZXgnXG5cbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSwgTmF2YmFyQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxuICB2aWV3UHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU10sXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnRdXG59KVxuQFJvdXRlcyhbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL21lbWJlcnMnLFxuICAgIGNvbXBvbmVudDogTWVtYmVyTGlzdENvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9hYm91dCcsXG4gICAgY29tcG9uZW50OiBBYm91dENvbXBvbmVudFxuICB9XG5dKVxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIG1haW4gYXBwbGljYXRpb24gY29tcG9uZW50LlxuICogV2l0aGluIHRoZSBAUm91dGVzIGFubm90YXRpb24gaXMgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlXG4gKiBhcHBsaWNhdGlvbnMgcm91dGVzLCBjb25maWd1cmluZyB0aGUgcGF0aHMgZm9yIHRoZSBsYXp5XG4gKiBsb2FkZWQgY29tcG9uZW50cyAoSG9tZUNvbXBvbmVudCwgTWVtYmVyTGlzdENvbXBvbmVudCwgTWVtYmVyR3JpZENvbXBvbmVudCwgTWVtYmVyQ29tcG9uZW50LCBBYm91dENvbXBvbmVudCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge31cbiJdfQ==
