import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';

import { NameListService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-memberList',
  templateUrl: 'memberList.component.html',
  styleUrls: ['memberList.component.css'],
  directives: [FORM_DIRECTIVES]
})
/**
 * This class represents the lazy loaded MemberListComponent.
 */
export class MemberListComponent {

  newName: string;

  /**
   * Creates an instance of the MemberListComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService the injected NameListService
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Calls the add method of the NameListService with the current
   * newName value of the form.
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

}
