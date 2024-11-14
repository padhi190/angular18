import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class RegisterComponent {
  //   registerForm = new FormGroup({
  // username: new FormControl('', Validators.required),
  // email: new FormControl('', [Validators.required, Validators.email]),
  // password: new FormControl('', Validators.required),
  //   });

  registerForm = inject(FormBuilder).nonNullable.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private store: Store) {}

  onSubmit() {
    console.log(this.registerForm.value);
    const request: RegisterRequestInterface = {
      user: this.registerForm.getRawValue(),
    };
    this.store.dispatch(register(request));
  }
}
