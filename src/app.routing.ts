import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home.component/home.component";
import { LoginComponent } from "./components/login.component/login.component";
import { PerfilComponent } from "./components/perfil.component/perfil.component";
import { SubsComponent } from "./components/subs.component/subs.component";

const appRoutes:Routes=
[
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"perfil",
        component:PerfilComponent
    },
    {
        path:"Subs",
        component:SubsComponent
    }
]

export const appRoutingProvider: any[] = [];

export const routing:ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);