import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from '../../shared/services/utils.service';
import { ExcelService} from '../../shared/services/excel.service'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
declare var $:any;
declare var iEdit:any;
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['position', 'empid', 'name','status', 'mobile', 'created_on','action'];
  Userlist:any = [];
  dataSource = new MatTableDataSource(this.Userlist);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedDeleteUser:any;
  selectedBlockUser:any;
  selectedEditUser:any;
  updateUser:boolean = false;

  environment:any;
  newEmployee:FormGroup;
  submitted:boolean = false;
  constructor(private api: HttpService, fb: FormBuilder, private utils: UtilsService, private router: Router,private excelService: ExcelService) {
    this.environment = environment;
  }

  ngOnInit() {
    this.getEmployeeList();
    $(".profile-img").change(function(e){
      var img = e.target.files[0];
      if(!iEdit.open(img, true, function(res){
        $(".result").attr("src", res);
      })){
        alert("Whoops! That is not an image!");
      }
    });
  }

 

  getEmployeeList(){
    this.api.getUserList().subscribe(
      data=> {
        this.Userlist = data['response'];
        console.log(data)
        this.dataSource = new MatTableDataSource(this.Userlist);
        setTimeout(()=> {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },500);
      },
      error=> {
        console.log(error);
        this.utils.alert('error', error['error']['message']);
        if(error['status'] == 400){
          this.router.navigate(['/login']);
          this.utils.removeData('zaoplus_admin_data');
        }
        debugger;
      }
    );
  }

 



  selectDeleteUser(user){
    debugger
    this.selectedDeleteUser = user;
  }

  deleteUser(){
    let dataToSend = {
      id: this.selectedDeleteUser._id
    };
    this.api.deleteUser(dataToSend).subscribe(
      data=> {
        this.utils.alert('success', data['message']);
        this.getEmployeeList();
      },
      error=> {
        console.log(error);
        debugger;
      }
    );
  }

  selectBlockUser(user){
    this.selectedBlockUser = user;
  }

  blockUser(){
    debugger
    let dataToSend = {
      id: this.selectedBlockUser._id,
      is_blocked: !this.selectedBlockUser.is_blocked
    };
    this.api.blockUser(dataToSend).subscribe(
      data=> {
        this.utils.alert('success', data['message']);
        this.getEmployeeList();
      },
      error=> {
        console.log(error);
        debugger;
      }
    );
  }
  datatoshow: any; imagetoshow: any;
  selectviewdata(element) {
    this.datatoshow = element
    if (element.profile_image != "N/A") {
      this.imagetoshow = element.profile_image ? environment.imageUrl + element.profile_image : 'assets/img/3002121059.jpg'
    } else {
      this.imagetoshow = 'assets/img/3002121059.jpg'
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.Userlist, 'sample');
  }
}
