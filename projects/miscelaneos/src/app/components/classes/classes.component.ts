import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  loading:boolean=false;

  alert:string = "alert-danger"

  properties={
    danger:false
  }

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    this.loading = true;
    setTimeout(()=>this.loading=false,3000)
  }
}
