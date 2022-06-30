import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
    this.router.parent?.params.subscribe(params=>{
      console.log("I am route children");
      console.log(params)
    })
   }
  ngOnInit(): void {
  }

}
