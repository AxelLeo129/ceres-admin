import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent implements OnInit {

  public form: FormGroup;

  constructor(private router: Router) { 
    this.form = this.createForm();
  }

  ngOnInit(): void {
    let user: any = localStorage.getItem('user');
    user = JSON.parse(user);
    this.form.patchValue({ nombre: user.nombre1, horaApertura: user.apertura, horaCierre: user.cierre, telefono: user.telefono });
  }

  createForm() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      horaApertura: new FormControl('', [Validators.required]),
      horaCierre: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required])
    });
  }

  save(){}

  getHome() {
    this.router.navigate(['/home']);
  }

  get nombre() {
    return this.form.get('nombre');
  }
  get ubicacion() {
    return this.form.get('ubicacion');
  }
  get horaApertura() {
    return this.form.get('horaApertura');
  }
  get horaCierre() {
    return this.form.get('horaCierre');
  }
  get telefono() {
    return this.form.get('telefono');
  }
  get platillos() {
    return this.form.get('platillos');
  }

}
