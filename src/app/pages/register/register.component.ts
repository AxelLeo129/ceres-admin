import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public register_form1: FormGroup;
  public register_form2: FormGroup;
  private pattern: any =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public form: number = 1;

  constructor(private router: Router) {
    this.register_form1 = this.createFormGroup();
    this.register_form2 = this.createFormGroup1();
   }

  ngOnInit(): void {
  }

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirm_password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  
  createFormGroup1() {
    return new FormGroup({
      telefono: new FormControl('', [Validators.required]),
      nombre1: new FormControl('', [Validators.required]),
      apertura: new FormControl('', [Validators.required]),
      cierre: new FormControl('', [Validators.required]),
    });
  }

  changeForm() {
    this.form = 2;
  }

  register() {
    const objR = {...this.register_form1.value, ...this.register_form2.value }
    console.log(objR);
    localStorage.setItem('user', JSON.stringify(objR));
    Swal.fire(
      'Exito',
      'Restaurante añadido',
      'success'
    );
    this.router.navigate(['/home']);
  }

  markerDragEnd(m: any, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  get nombre() {
    return this.register_form1.get('nombre');
  }
  get email() {
    return this.register_form1.get('email');
  }
  get password() {
    return this.register_form1.get('password');
  }
  get confirm_password() {
    return this.register_form1.get('confirm_password');
  }
  get nombre1() {
    return this.register_form2.get('nombre1');
  }
  get telefono() {
    return this.register_form2.get('telefono');
  }
  get apertura() {
    return this.register_form2.get('apertura');
  }
  get cierre() {
    return this.register_form2.get('cierre');
  }

}
