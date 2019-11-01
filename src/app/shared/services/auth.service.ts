import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router) { }

    isLoggedIn() {
        var token = window.localStorage.getItem('appcrowd_admin_data');
        if (token) return true;
        else return false;
    }
}

