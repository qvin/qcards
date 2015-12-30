import {App, Platform} from 'ionic-framework/ionic';
import {CategoriesPage} from './pages/categories/categories';

@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
    <ion-overlay></ion-overlay>
  `,
})
export class MyApp {
    public platform: Platform;
    public root;
    
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = CategoriesPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
