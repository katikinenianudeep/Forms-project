import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
   parsedJson: any;
   array: any;
    constructor(private route: ActivatedRoute, private  router: Router) {
  }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.parsedJson = params;
      console.log(this.parsedJson);
    });
  }

  edit() {
    localStorage.setItem('data', JSON.stringify(this.parsedJson));
    this.router.navigate(['/edit']);
  }
  cancel() {
    this.router.navigate(['']);
  }

}
