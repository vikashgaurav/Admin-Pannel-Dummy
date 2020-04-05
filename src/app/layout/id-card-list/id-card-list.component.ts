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
  selector: 'app-id-card-list',
  templateUrl: './id-card-list.component.html',
  styleUrls: ['./id-card-list.component.css']
})


export class IdCardListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'action'];
  Userlist: any = []; name: any;
  dataSource = new MatTableDataSource(this.Userlist);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  environment: any;
  constructor(private api: HttpService,
    private fb: FormBuilder,
    private utils: UtilsService,
    private router: Router,
    private excelService: ExcelService) {
    this.environment = environment;
  }

  ngOnInit() {
    this.getList();
  }


  getList() {
    this.api.get_list_of_education({ type: 3 }).subscribe(
      data => {
        this.Userlist = data['response'];
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
  name_to_show: any; _id: any;
  selecteditUser(data) {
    this.name = data.name;
    this._id = data._id;
  }

  update() {
    let data_to_send = {
      name: this.name,
      _id: this._id,
      type: 3
    }
    if (this.name == '' || this.name == undefined) {
      this.utils.alert('error', 'Please enter text');
      return;
    }
    this.api.edit_education(data_to_send).subscribe(
      data => {
        this.update_data = data['response'];
        this.utils.alert('success', data['message']);
        this.getList();
        document.getElementById('close-lang-modal1').click();
      },
      error => {
        this.utils.alert('error', error['error']['message']);
      }
    );
  }

  addNew() {
    this.name = '';
  }

  update_data: any;
  submit_value() {
    if (this.name == '' || this.name == undefined) {
      this.utils.alert('error', 'Please enter text');
      return;
    }
    this.api.add_list_data({ type: 3, name: this.name }).subscribe(
      data => {
        this.update_data = data['response'];
        this.utils.alert('success', data['message']);
        this.getList();
        document.getElementById('close-lang-modal').click();
      },
      error => {
        this.utils.alert('error', error['error']['message']);
      }
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


