import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-platillo',
  templateUrl: './add-platillo.component.html',
  styleUrls: ['./add-platillo.component.scss']
})
export class AddPlatilloComponent implements OnInit {

  public form: FormGroup;

  constructor(private router: Router) { 
    this.form = this.createForm();
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.form.value);
    let list: any = localStorage.getItem('menu');
    list = JSON.parse(list);
    
    if(!list) {
      list = [];
    }
    list.push(this.form.value);
    console.log(list);
    localStorage.setItem('menu', JSON.stringify(list));
    Swal.fire(
      'Exito',
      'Platillo añadido',
      'success'
    );
    this.router.navigate(['/menu']);
  }

  createForm() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
    });
  }

  get nombre() {
    return this.form.get('nombre');
  }
  get descripcion() {
    return this.form.get('descripcion');
  }
  get precio() {
    return this.form.get('precio');
  }

}
