import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from '../../shared/services/utils.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bodysystem',
  templateUrl: './bodysystem.component.html',
  styleUrls: ['./bodysystem.component.css']
})
export class BodysystemComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'description', 'supporting_product', 'body_system', 'action'];
  Userlist: any = [];
  dataSource = new MatTableDataSource(this.Userlist);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

}
