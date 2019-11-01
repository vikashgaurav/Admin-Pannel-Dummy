import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from '../../shared/services/utils.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.css']
})
export class ContentManagementComponent implements OnInit {

  constructor(private api: HttpService, fb: FormBuilder, private utils: UtilsService, private router: Router) { }

  ngOnInit() {
    this.getcontentList()
  }

  contentlist:any;
  getcontentList() {
    this.api.getcontent().subscribe(
      data => {
        this.contentlist = data['response'];
      },
      error => {
        this.utils.alert('error', error['error']['message']);
      }
    );
  }
  routername
  getdata(data){
    this.routername = data.content_name.toLowerCase();
    console.log(this.routername)
    this.router.navigate(['/'+this.routername])
  }
  pathname:any;
  getroutingdata(data){
    debugger
    this.pathname = data.content_name.toLowerCase();
    if (this.pathname =='oils'){
      this.router.navigate(['/addoil']);
    }
    if (this.pathname == 'blends') {
      this.router.navigate(['/addBlends']);
    }
    if (this.pathname == 'supplements') {
      this.router.navigate(['/addSupplement']);
    }
    if (this.pathname == 'properties') {
      this.router.navigate(['/addproperty']);
    }
  }


}
