import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ModalsComponent } from '../modals/modals.component';
import { IUserLogin } from '../../interface/user.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, ModalsComponent, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  login: FormGroup;
  message?: string;
  constructor(private fb: FormBuilder, private userServie: UserService) {
    // สร้าง formGroup ด้วย formBuilder
    this.login = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    // รวม payload ก่อนส่งเข้า service
    const payload: IUserLogin = {
      username: this.login.value.username,
      password: this.login.value.password,
    };
    try {
      // รับข้อมูล Observable จาก login service
      this.userServie.login(payload).subscribe((res) => {
        // เก็บข้อความจาก meta.response_data
        let msg = res.meta.response_data;

        // resplace ข้อความที่มีคำว่า Hi!!, ด้วย Hi!!, ${payload.username} หรือใช้การเพิ่ม username เข้าไป แล้วเก็บเข้า variable message
        this.message = msg.replace('Hi!!, ', `Hi!!, ${payload.username} `);
      });
    } catch (error) {
      // log error
      console.error(error);
    }
  }

  onClose() {
    this.message = undefined;
  }
}
