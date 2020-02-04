import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { UtilsService } from '../../shared/services/utils.service';
import { environment } from '../../../environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var $;
declare var iEdit;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  adminData:any;
  environment;
  editProfile: FormGroup;
  profileImage: any;
  submitted:boolean = false;
  constructor(private utils: UtilsService, fb: FormBuilder, private api: HttpService, private router: Router) {
    this.adminData = this.utils.get('zaoplus_admin_data');
    this.environment = environment;
   
    this.selectedFile = this.adminData.profile_image ? this.adminData.profile_image : ''
    this.editProfile = fb.group({
      first_name: [this.adminData.First_Name, Validators.required],
      last_name: [this.adminData.Last_Name, Validators.required],
      description: [this.adminData.Description],
      city: [this.adminData.city, Validators.required],
      email: [this.adminData.email, [Validators.required, Validators.email]],
      contact: [this.adminData.mobile_number, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  ngOnInit() {
    this.utils.scrollToTop();
    // $("#profile-img").change(function(e){
    //   var img = e.target.files[0];
    //   if(!iEdit.open(img, true, function(res){
    //    $("#result").attr("src", res);  
    //   })){
    //     alert("Whoops! That is not an image!");
    //   }
    // });
  }

  get f(){ return this.editProfile.controls; }

  // submit(){
  //   this.submitted = true;
  //   if(this.editProfile.invalid) return;
  //   let profileImage = $("#result").attr("src");  
  //   let dataToSend = {
  //     email: this.editProfile.value.email,
  //     First_Name: this.editProfile.value.first_name,
  //     Last_Name: this.editProfile.value.last_name,
  //     mobile_number: this.editProfile.value.contact,
  //     profile_image: profileImage.includes('data:image/') ? profileImage : undefined,
  //     description: this.editProfile.value.description,
  //     city: this.editProfile.value.city,
  //   };
  //   debugger
  //   this.api.updateProfile(dataToSend).subscribe(
  //     data=> {
  //       this.utils.removeData('zaoplus_admin_data');
  //       this.utils.set('zaoplus_admin_data', data['data']);
  //       this.utils.alert('success', data['message']);
  //       this.utils.profileChanged('Changed');
  //       this.router.navigate(['/profile']);
  //     },
  //     error=> {
  //       console.log(error);
  //       this.utils.alert('error', error['error']['message']);
  //       if(error['status'] == 400){
  //         this.router.navigate(['/login']);
  //         this.utils.removeData('zaoplus_admin_data');
  //       }
  //     }
  //   );
  // }

  submit() {
    this.submitted = true;
    if (this.editProfile.invalid) return;
    debugger
    const uploadData = new FormData();
    uploadData.append('profile_image', this.selectedFile ? this.selectedFile : undefined);
    uploadData.append('First_Name', this.editProfile.value.first_name ? this.editProfile.value.first_name : "N/A");
    uploadData.append('Last_Name', this.editProfile.value.last_name ? this.editProfile.value.last_name : undefined);
    uploadData.append('mobile_number', this.editProfile.value.contact ? this.editProfile.value.contact : undefined);
    uploadData.append('country', this.editProfile.value.country ? this.editProfile.value.country : "N/A");
    uploadData.append('country_code', this.editProfile.value.country_code ? this.editProfile.value.country_code : "N/A");
    uploadData.append('city', this.editProfile.value.city ? this.editProfile.value.city : undefined);
    uploadData.append('Description', this.editProfile.value.description ? this.editProfile.value.description : "N/A");
  
  
    this.api.updateProfile(uploadData).subscribe(
      data => {
        this.utils.removeData('zaoplus_admin_data');
        this.utils.set('zaoplus_admin_data', data['response']);
        this.utils.alert('success', data['message']);
        this.router.navigate(['/profile']);
      },
      error => {
        console.log(error);
        this.utils.alert('error', error['error']['message']);
        if (error['status'] == 400) {
          this.router.navigate(['/login']);
          this.utils.removeData('zaoplus_admin_data');
        }
      }
    );
  }

  openImage(){
    $('#imgUpload').click()
  }

  selectedFile
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    if (!iEdit.open(this.selectedFile, true, function (res) {
      $("#result").attr("src", res);
    })) {
      alert("Whoops! That is not an image!");
    }
  }
}
