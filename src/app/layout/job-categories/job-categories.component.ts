import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from '../../shared/services/utils.service';
import { ExcelService } from '../../shared/services/excel.service'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
declare var $: any;
declare var iEdit: any;
@Component({
  selector: 'app-job-categories',
  templateUrl: './job-categories.component.html',
  styleUrls: ['./job-categories.component.css']
})
export class JobCategoriesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'Name_English', 'Name_portugues', 'action'];
  Userlist: any = [];
  dataSource = new MatTableDataSource(this.Userlist);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedDeleteUser: any;
  selectedBlockUser: any;
  selectedEditUser: any;
  updateUser: boolean = false;
  cat_name: any; cat_name_portugues:any;
  environment: any;
  newJob: FormGroup;
  submitted: boolean = false;
  constructor(private api: HttpService,private fb: FormBuilder, private utils: UtilsService, private router: Router, private excelService: ExcelService) {
    this.environment = environment;
    this.newJob = this.fb.group({
      cat_name: ['', Validators.required],
      cat_name_portugues: ['', Validators.required],

    });
  }

  ngOnInit() {
    this.getEmployeeList();
    $(".profile-img").change(function (e) {
      var img = e.target.files[0];
      if (!iEdit.open(img, true, function (res) {
        $(".result").attr("src", res);
      })) {
        alert("Whoops! That is not an image!");
      }
    });
  }



  getEmployeeList() {
    this.api.getCategorieList().subscribe(
      data => {
        this.Userlist = data['response'];
        console.log(data)
        this.dataSource = new MatTableDataSource(this.Userlist);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 500);
      },
      error => {
        console.log(error);
        this.utils.alert('error', error['error']['message']);
        if (error['status'] == 400) {
          this.router.navigate(['/login']);
          this.utils.removeData('appcrowd_admin_data');
        }
        debugger;
      }
    );
  }
  get f() { return this.newJob.controls; }

  createUser(){

    this.submitted = true;
    if (this.newJob.invalid) {
      return;
    }
    let dataToSend={
      cat_name:this.newJob.value.cat_name,
      cat_name_portugues: this.newJob.value.cat_name_portugues
    }
    this.api.create_cat(dataToSend).subscribe(
      data => {
        this.utils.alert('success', data['message']);
        $('#addUser').modal('hide');
        this.getEmployeeList();

      },
      error => {
        console.log(error);
        this.utils.alert(error, error.error.message);
      }
    );
   
  }
  create_cat(){
    this.updateUser=false
    this.newJob = this.fb.group({
      cat_name: ['', Validators.required],
      cat_name_portugues: ['', Validators.required],

    });
  }
  value_to_show:any;
  selectEditUser(a){
    this.updateUser=true;
    this.value_to_show=a;
    this.newJob = this.fb.group({
      cat_name: [this.value_to_show.cat_name, Validators.required],
      cat_name_portugues: [this.value_to_show.cat_name_portugues, Validators.required],

    });
  }


  selectDeleteUser(user) {
    this.selectedDeleteUser = user;
  }

  deleteUser() {
    debugger;
    let dataToSend = {
      _id: this.selectedDeleteUser._id
    };
    this.api.delete_create_cat(dataToSend).subscribe(
      data => {
        this.utils.alert('success', data['message']);
        this.getEmployeeList();
      },
      error => {
        this.utils.alert(error, error.error.message);
       
      }
    );
  }

  updateSelectedUser(){
    this.submitted = true;
    if (this.newJob.invalid) {
      return;
    }
    let dataToSend = {
      _id: this.value_to_show._id,
      cat_name: this.newJob.value.cat_name,
      cat_name_portugues: this.newJob.value.cat_name_portugues
    }
    this.api.edit_create_cat(dataToSend).subscribe(
      data => {
        this.utils.alert('success', data['message']);
        $('#addUser').modal('hide');
        this.getEmployeeList();

      },
      error => {
        console.log(error);
        this.utils.alert(error, error.error.message);
      }
    );
  }




  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.Userlist, 'sample');
  }
}

