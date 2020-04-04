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

@Component({
  selector: 'app-agronomist-list',
  templateUrl: './agronomist-list.component.html',
  styleUrls: ['./agronomist-list.component.css']
})



export class AgronomistListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'empid', 'name', 'status', 'mobile', 'created_on', 'action'];
  Userlist: any = [];
  dataSource = new MatTableDataSource(this.Userlist);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  environment: any;
  constructor(private api: HttpService, fb: FormBuilder, private utils: UtilsService, private router: Router, private excelService: ExcelService) {
    this.environment = environment;
  }

  ngOnInit() {
    this.getList();
  }


  getList() {
    this.api.getagronomistList().subscribe(
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
        this.utils.alert('error', error['error']['message']);
        if (error['status'] == 400) {
          this.router.navigate(['/login']);
          this.utils.removeData('zaoplus_admin_data');
        }
      }
    );
  }

  selectedDeleteUser: any;
  selectDeleteUser(user) {
    this.selectedDeleteUser = user;
  }

  deleteUser() {
    let dataToSend = {
      id: this.selectedDeleteUser._id,
      type: 2
    };
    this.api.delete_user(dataToSend).subscribe(
      data => {
        this.utils.alert('success', data['message']);
        this.getList();
      },
      error => {
        console.log(error);
      }
    );
  }

  selectedBlockUser: any;
  selectBlockUser(user) {
    this.selectedBlockUser = user;
  }

  blockUser() {
    let dataToSend = {
      id: this.selectedBlockUser._id,
      is_blocked: !this.selectedBlockUser.is_blocked,
      type: 2
    };
    this.api.block_user(dataToSend).subscribe(
      data => {
        this.utils.alert('success', data['message']);
        this.getList();
      },
      error => {
        console.log(error);
      }
    );
  }

  datatoshow: any; imagetoshow: any;
  selectviewdata(element) {
    this.datatoshow = element
    if (element.profile_image != "N/A") {
      this.imagetoshow = element && element.profile_image ? element.profile_image : 'assets/img/3002121059.jpg'
    } else {
      this.imagetoshow = 'assets/img/3002121059.jpg'
    }
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

