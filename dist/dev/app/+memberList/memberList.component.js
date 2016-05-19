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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var index_1 = require('../shared/index');
var MemberListComponent = (function () {
    function MemberListComponent(nameListService) {
        this.nameListService = nameListService;
    }
    MemberListComponent.prototype.addName = function () {
        this.nameListService.add(this.newName);
        this.newName = '';
        return false;
    };
    MemberListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-memberList',
            templateUrl: 'memberList.component.html',
            styleUrls: ['memberList.component.css'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.NameListService])
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rbWVtYmVyTGlzdC9tZW1iZXJMaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQWdDLGlCQUFpQixDQUFDLENBQUE7QUFDbEQscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHNCQUFnQyxpQkFBaUIsQ0FBQyxDQUFBO0FBWWxEO0lBVUUsNkJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFPdkQscUNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQS9CSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxDQUFDO1NBQzlCLENBQUM7OzJCQUFBO0lBMkJGLDBCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSwyQkFBbUIsc0JBdUIvQixDQUFBIiwiZmlsZSI6ImFwcC8rbWVtYmVyTGlzdC9tZW1iZXJMaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtbWVtYmVyTGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnbWVtYmVyTGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtZW1iZXJMaXN0LmNvbXBvbmVudC5jc3MnXSxcbiAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFU11cbn0pXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgTWVtYmVyTGlzdENvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIE1lbWJlckxpc3RDb21wb25lbnQge1xuXG4gIG5ld05hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgTWVtYmVyTGlzdENvbXBvbmVudCB3aXRoIHRoZSBpbmplY3RlZFxuICAgKiBOYW1lTGlzdFNlcnZpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7TmFtZUxpc3RTZXJ2aWNlfSBuYW1lTGlzdFNlcnZpY2UgdGhlIGluamVjdGVkIE5hbWVMaXN0U2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIG5hbWVMaXN0U2VydmljZTogTmFtZUxpc3RTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgYWRkIG1ldGhvZCBvZiB0aGUgTmFtZUxpc3RTZXJ2aWNlIHdpdGggdGhlIGN1cnJlbnRcbiAgICogbmV3TmFtZSB2YWx1ZSBvZiB0aGUgZm9ybS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXG4gICAqL1xuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMubmFtZUxpc3RTZXJ2aWNlLmFkZCh0aGlzLm5ld05hbWUpO1xuICAgIHRoaXMubmV3TmFtZSA9ICcnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59XG4iXX0=
