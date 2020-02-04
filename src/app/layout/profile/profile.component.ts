import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/services/utils.service';
import { environment } from '../../../environments/environment';
declare var $;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  adminData:any;
  environment;
  ImageUrl;
  constructor(private utils: UtilsService) {
    this.environment = environment;
    this.utils.scrollToTop();
  }

  ngOnInit() {
    this.utils.profileStatus.subscribe(data=> {
      this.adminData = this.utils.get('zaoplus_admin_data');
      console.log(this.adminData)
      this.ImageUrl = this.adminData.profile_image ? environment.baseUrl+""+this.adminData.profile_image+"?"+new Date().getTime(): 'assets/img/8447261358.jpg';
    });
  }
}
