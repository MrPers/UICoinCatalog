import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<body class="text-gray-700"><div class="container mx-auto px-4"><app-header></app-header><router-outlet></router-outlet></div></body>', 
})
export class AppComponent {
  
}
