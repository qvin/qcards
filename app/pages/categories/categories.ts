import {Page, NavController} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import * as helpers from '../../helpers';
import {WordlistsPage} from '../wordlists/wordlists'

@Page({
  templateUrl: 'build/pages/categories/categories.html',
  directives: [forwardRef(() => helpers.AndroidAttribute)]
})

export class CategoriesPage {
   nav: NavController;
   constructor(nav: NavController) {
      this.nav = nav;
  }

  openNavDetailsPage(item) {
    //this.nav.push(WordlistsPage, { name: item });
    //this.nav.setPages(WordlistsPage);
    this.nav.push(WordlistsPage, {name: item}, {}, null);
  }

}
