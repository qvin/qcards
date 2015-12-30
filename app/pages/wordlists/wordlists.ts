import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import * as helpers from '../../helpers'

@Page({
  templateUrl: 'build/pages/wordlists/wordlists.html',
  directives: [forwardRef(() => helpers.AndroidAttribute)]
})

export class WordlistsPage {
  
  constructor(nav: NavController, params: NavParams) {
    this.nav = nav;
    this.selection = { title: params.data.name };
    var navData = {
        'One': "A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.",
        'Two': "The latest version of cascading stylesheets - the styling language of the web!",
        'Three': "The latest version of the web's markup language.",
        'Four': "Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension."
    };

    this.selection['content'] = navData[this.selection.title];
  }
}