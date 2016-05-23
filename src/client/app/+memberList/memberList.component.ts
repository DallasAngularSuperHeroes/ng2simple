import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';

import { MemberListService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-memberList',
  // providers: ['MemberListService'],
  templateUrl: 'memberList.component.html',
  styleUrls: ['memberList.component.css'],
  directives: [FORM_DIRECTIVES]
})
/**
 * This class represents the lazy loaded MemberListComponent.
 */
export class MemberListComponent {

  newMember: string;

  /**
   * Creates an instance of the MemberListComponent with the injected
   * MemberListService.
   *
   * @param {MemberListService} memberListService the injected MemberListService
   */
  //constructor() {}
  constructor(public memberListService: MemberListService) {}

    //this.members = memberListService.get();
    // addMember(): boolean {
    //   this.memberListService.add(this.newMember);
    //   this.newMember = '';
    //   return false;
  
};
