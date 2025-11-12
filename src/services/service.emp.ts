import { Injectable } from "@angular/core";
import Usuario from "../models/Usuario";
import { environment } from "../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export default class ServiceEmp
{
    constructor(private _http:HttpClient){}

    iniciarSesion(user:Usuario):Promise<any>
    {
        let url = environment.emp;
        let endPoint = "Auth/Login";

        let data = JSON.stringify(user);
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");

        let promise = new Promise((resolve) =>
        {
            this._http.post(url+endPoint, data, {headers:header}).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    getPerfil(token:any):Promise<any>
    {
        let url = environment.emp;
        let endPoint = "api/Empleados/PerfilEmpleado";

        let header = new HttpHeaders();
        header = header.set("Authorization", `Bearer ${token}`);
        header = header.set("Content-type", "application/json");

        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint, {headers:header}).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }

    getSubs(token:any):Promise<any>
    {
        let url = environment.emp;
        let endPoint = "api/Empleados/Subordinados";

        let header = new HttpHeaders();
        header = header.set("Authorization", `Bearer ${token}`);
        header = header.set("Content-type", "application/json");

        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint, {headers:header}).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }
}