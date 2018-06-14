import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
  constructor() {
  }

  ngOnInit() {
    // console.log(this.filterItems('ap'));
  }

  myFunction() {
    document.getElementById('myDropdown').classList.toggle('show');
  }

  filterItems = (event: any) => {
    return this.fruits.filter(el => {
      return el.toLowerCase().indexOf(event) > -1;
    });
  }
}
