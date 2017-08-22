import { NgModule } from "@angular/core";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoginServiceImpl } from "app/providers/login.service-impl";
import { ChangePasswordComponent } from "app/base/change-password/change-password.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
    ],
    declarations: [
        ChangePasswordComponent,
    ],

    exports: [ChangePasswordComponent],
    providers: [LoginServiceImpl]
})
export class ChangePasswordModule {
}