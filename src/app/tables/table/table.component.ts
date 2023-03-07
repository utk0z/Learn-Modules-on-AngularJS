import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any[] = [
    { name: 'Can', age: 29, job: 'Endüstri Mühendisi', employed: 'Hayır' },
    { name: 'Osman', age: 30, job: 'Yazılım Mühendisi', employed: 'Hayır' },
    { name: 'Elif', age: 27, job: 'İşletme Mezunu', employed: 'Evet' }
  ];
  headers: any[] = [
    { key: 'employed', label: 'Aldığı Ücretten Memnun mu?' },
    { key: 'name', label: 'Ad Soyad' },
    { key: 'age', label: 'Yaş' },
    { key: 'job', label: 'Meslek' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
