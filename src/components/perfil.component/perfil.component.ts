import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import Empleado from '../../models/Empleado';
import ServiceEmp from '../../services/service.emp';

@Component
({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit
{
  public perfil!:Empleado;
  
  constructor(private _service:ServiceEmp,
              private _router:Router) {}

  ngOnInit(): void 
  {
    let token = localStorage.getItem('token');
    if (!token)
    {
      this._router.navigate(["/login"]);
    }

    this._service.getPerfil(token).then(response =>
    {
      this.perfil = response;
    }) 
  }
}
