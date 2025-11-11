import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IUserLogin } from '../../interface/user.interface';
import { ModalsComponent } from '../modals/modals.component';
@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, ModalsComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  login: FormGroup;
  message?: string;
  constructor(private fb: FormBuilder, private userServie: UserService) {
    this.login = fb.group({
      username: [''],
      password: [''],
    });
  }

  onLogin() {
    const payload: IUserLogin = {
      username: this.login.value.username,
      password: this.login.value.password,
    };
    try {
      this.userServie.login(payload).subscribe((res) => {
        let msg = res.meta.response_data;
        this.message = msg.replace('Hi!!, ', `Hi!!, ${payload.username} `);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
