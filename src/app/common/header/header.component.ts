import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { UtilsService } from '../../shared/services/utils.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  adminData:any;
  environment;
  ImageUrl;
  constructor(
    private api: HttpService,
    private utils: UtilsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.environment = environment;
    $('.sidenav-toggler').on('click', function(){
      $(this).toggleClass('collapsed');
      $('.sidenav-collapse .sidenav').toggleClass('sidenav-collapsed');
      $('body').toggleClass('layout-sidebar-collapsed');
      if($(this).hasClass('collapsed')){
        $(this).attr('title', 'Expand sidenav')
      }else{
        $(this).attr('title', 'Collapse sidenav')
      }
    }); 
    this.utils.profileStatus.subscribe(data=> {
      this.adminData = this.utils.get('zaoplus_admin_data');
      this.ImageUrl = this.adminData.profile_image ? environment.baseUrl+""+this.adminData.profile_image+"?"+new Date().getTime(): 'assets/img/8447261358.jpg';
    });
  }

  logout(){
    let admin = this.utils.get('zaoplus_admin_data');
    this.api.logout({
      id: admin._id
    }).subscribe(
      data=> {
        this.utils.alert('success', data['message']);
        this.router.navigate(['/login']);
        this.utils.removeData('zaoplus_admin_data');
      },
      error=> {
        console.log(error);
        if(error['status'] == 400){
          this.router.navigate(['/login']);
          this.utils.removeData('zaoplus_admin_data');
        }
        debugger;
      }
    );
  }

}
