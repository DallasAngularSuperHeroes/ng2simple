import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import { Member, MemberListService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-member',
  templateUrl: 'member.component.html',
  styleUrls: ['member.component.css'],
  directives: [FORM_DIRECTIVES]
})
/**
 * This class represents the lazy loaded MemberComponent.
 */
export class MemberComponent implements OnActivate {

  member: Member;

  constructor(
      private router: Router,
      private memberListService: MemberListService) {}
  
  routerOnActivate(curr: RouteSegment): void {
    let id:number = +curr.getParam('id');
    
    this.member = this.memberListService.getMember(id);
    console.log(`232 this.member ${JSON.stringify(this.member)}`);
    console.log(`233 this.memberListService.members ${JSON.stringify(this.memberListService.members)}`);
     //then((member:Member) => this.member = member);
  }

  gotoList() {
    let memberId = this.member ? this.member.id : null;
    this.router.navigate([`/members`, {id: memberId}]);
  }

};
