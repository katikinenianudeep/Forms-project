import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  parseData: any;

  constructor(private route: Router) { }

  ngOnInit() {
    this.parseData = JSON.parse(localStorage.getItem('data'));
  }
  close() {
   this.route.navigate(['/form'], {queryParams: this.parseData, skipLocationChange: true});
  }

  update() {
   if (this.parseData.id === null || this.parseData.id === undefined || this.parseData.id === '' &&
    this.parseData.Name === null || this.parseData.Name === undefined || this.parseData.Name === '' &&
    this.parseData.email === null || this.parseData.email === undefined || this.parseData.email === '' &&
    this.parseData.phone === null || this.parseData.phone === undefined || this.parseData.phone === '' &&
    this.parseData.zipcode === null || this.parseData.zipcode === undefined || this.parseData.zipcode === '') {
    alert('please enter Data in fields');
   } else if (this.parseData.id === null || this.parseData.id === undefined || this.parseData.id === '') {
      alert('please enter Id');
    } else if (this.parseData.Name === null || this.parseData.Name === undefined || this.parseData.Name === '') {
      alert('please enter Name');
    } else if (this.parseData.email === null || this.parseData.email === undefined || this.parseData.email === '') {
      alert('please enter Email');
    } else if (this.parseData.phone === null || this.parseData.phone === undefined || this.parseData.phone === '') {
      alert('please enter PhoneNumber');
    } else if (this.parseData.zipcode === null || this.parseData.zipcode === undefined || this.parseData.zipcode === '') {
      alert('please enter Zipcode');
    } else {
     this.route.navigate(['/form'], {queryParams: this.parseData, skipLocationChange: true});
     alert('updated Successfully');
   }
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();

    }
}

}
