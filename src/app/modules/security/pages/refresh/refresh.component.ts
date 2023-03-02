import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../services/auth';

@Component({
  selector: 'app-refresh',
  template:'',
  styles: []
})
export class RefreshComponent {
  constructor(private _authService:AuthService) {
  }

  ngOnInit(): void {
    debugger;
    this._authService.refreshCallBack();
  }

}
