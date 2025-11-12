import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import Empleado from '../../models/Empleado';
import ServiceEmp from '../../services/service.emp';

@Component
({
  selector: 'app-subs',
  standalone: false,
  templateUrl: './subs.component.html',
  styleUrl: './subs.component.css',
})
export class SubsComponent implements OnInit
{
   public subs!:Array<Empleado>;
  
  constructor(private _service:ServiceEmp,
              private _router:Router) {}

  ngOnInit(): void 
  {
    let token = localStorage.getItem('token');
    if (!token)
    {
      this._router.navigate(["/login"]);
    }

    this._service.getSubs(token).then(response =>
    {
      this.subs = response;
    }) 
  }
}
