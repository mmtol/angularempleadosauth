import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import ServiceEmp from '../../services/service.emp';
import Usuario from '../../models/Usuario';

@Component
({
  selector: 'app-login.component',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent 
{
  public user!:Usuario;

  @ViewChild("cajaUsuario") cajaUsuario:ElementRef;
  @ViewChild("cajaPasswd") cajaPasswd:ElementRef;

  constructor(private _service:ServiceEmp,
              private _router:Router)
  {
    this.cajaUsuario = new ElementRef("");
    this.cajaPasswd = new ElementRef(0);
  }

  iniciarSesion():void
  {
    let usuario = this.cajaUsuario.nativeElement.value;
    let passwd = parseInt(this.cajaPasswd.nativeElement.value);

    this.user = new Usuario(usuario, passwd);

    this._service.iniciarSesion(this.user).then(response =>
    {
      console.log(response);
      if (response.token)
      {
        localStorage.setItem('token', response.token);
      }
    })
  }
}
