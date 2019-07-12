import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel,
         NavigationEnd,
         NavigationError,
         NavigationStart,
         Event,
         Router
        } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auaushop';

  constructor(private _loadingBarSevice: SlimLoadingBarService, private router: Router){
this.router.events.subscribe((event: Event) =>{
  this.navigationInterceptor(event);

});
}

private navigationInterceptor(event: Event): void{
  if(event instanceof NavigationStart){
    this._loadingBarSevice.start();
  }
  if(event instanceof NavigationEnd){
    this._loadingBarSevice.complete();
  }
  if(event instanceof NavigationCancel){
    this._loadingBarSevice.stop();
  }
  if(event instanceof NavigationError){
    this._loadingBarSevice.stop();
  }
}

}
