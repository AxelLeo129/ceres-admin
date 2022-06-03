import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public plates: Array<any> = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    let list: any = localStorage.getItem('menu');
    list = JSON.parse(list);
    if(list) {
      this.plates = list;
    }
    console.log(list)
  }

  addPlate() {
    this.router.navigate(['/add-platillo']);
  }

}
