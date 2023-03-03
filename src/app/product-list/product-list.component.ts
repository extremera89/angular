import { Component, OnInit } from '@angular/core';
import { PeliculaservicioService } from '../peliculaservicio.service';
import { take } from 'rxjs';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  myData: any;
  myData$: any;
  constructor(private peliculaservicio: PeliculaservicioService) {}

  ngOnInit(): void {
    this.myData$ = this.peliculaservicio.getData();
  }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
