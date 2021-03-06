import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutOneComponent } from "./layout/layout-one/layout-one.component";
import { PassportComponent } from "./layout/passport/passport.component";
import { ExceptionComponent } from "./layout/exception/exception.component";
import { LoginGuardService } from "./shared/guard/login-guard.service";
import { LayoutDefaultComponent } from "./layout/layout-default/layout-default.component";
const defaultLayout = "layout-one";
const canActivate = [LoginGuardService];
const exceptionChildren = [{}];
const children = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: "./routes/home/home.module#HomeModule",
    data: {
      breadcrumb: "首页"
    }
  },
  {
    path: "userRight",
    loadChildren: "./routes/auth/auth.module#AuthModule",
    data: {
      breadcrumb: "角色权限"
    }
  }
];
const passportChildren = [
  {
    path: "",
    loadChildren: "./routes/passport/passport.module#PassportModule"
  }
];
const routes: Routes = [
  { path: "", redirectTo: defaultLayout, pathMatch: "full" },
  {
    path: "passport",
    component: PassportComponent,
    children: passportChildren
  },
  {
    path: "layout-default",
    component: LayoutDefaultComponent,
    children,
    canActivate
  },
  {
    path: "layout-one",
    component: LayoutOneComponent,
    children,
    canActivate
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
