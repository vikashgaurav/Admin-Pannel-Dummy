import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { HttpService } from '../services/http.service';
declare var $;
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted:boolean = false;
  constructor(
    fb: FormBuilder, 
    private utils: UtilsService,
    private api: HttpService,
    private router: Router
  ) {
    let adminCredentials = this.utils.get('appcrowd_admin_data');
    this.loginForm = fb.group({
      email: [ adminCredentials ? adminCredentials.email : "", [Validators.required, Validators.email]],
      password: [adminCredentials ? adminCredentials.password : "", Validators.required]
    });
  }

  ngOnInit() {
  }

  get f(){ return this.loginForm.controls; }

  login(){
    this.submitted = true;
    if(this.loginForm.invalid) return;

    let remember_me = $('#remember_me').is(":checked");
    if(remember_me) {
      this.utils.set('appcrowd_admin_data', this.loginForm.value);
    } else {
      this.utils.removeData('appcrowd_admin_data');
    }

    this.api.login(this.loginForm.value).subscribe(
      data=> {
        console.log(data)
        this.utils.set('appcrowd_admin_data', data['response']);
        this.utils.alert('success', 'Admin logged in successfully');
        this.router.navigate(['/dashboard']);
      },
      error=> {
        debugger
        this.utils.alert('error', error['error']['message']);
      }
    );
  }
}
