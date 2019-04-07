import { Component } from '@angular/core';

/**Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime. */
@Component({
  selector: 'app-root', // unique identifier that is used in other areas of the app
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/** Title of the angular app */
export class AppComponent {
  title = 'contactApp';
}
