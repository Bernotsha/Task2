import { Component, Input, OnInit } from '@angular/core';
import { Interns } from '../components/common/Intern';

@Component({
  selector: 'app-my-generic-table',
  templateUrl: './my-generic-table.component.html',
  styleUrls: ['./my-generic-table.component.css']
})
export class MyGenericTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() rows: any;

  @Input() table_header: any;
  
  objectKeys = Object.keys;


}
