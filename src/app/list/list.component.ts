import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'detail',
  template: `
    <h1>List component</h1>
    <ngx-datatable
      class="material"
      [rows]="rows"
      [columns]="columns"
      [columnMode]="'force'"
      [headerHeight]="50"
      [footerHeight]="50"
      [rowHeight]="'auto'"
      [reorderable]="true">
    </ngx-datatable>
  `
})
export class ListComponent implements OnInit {

  private columns = [
    {prop: 'name'},
    {name: 'Gender'},
    {name: 'Company'}
  ];

  private rows = [
    {
      name: 'name1',
      gender: 'male',
      compamy: 'company2'
    }
  ]

  public ngOnInit() {
  }

}
