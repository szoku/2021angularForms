import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
     'email': ['', Validators.compose([
    Validators.required, Validators.email])],
     'imie': ['', Validators.compose([
    Validators.required, Validators.minLength(2)])],
     'nazwisko': ['', Validators.compose([
    Validators.required, Validators.minLength(2)])],
     'ulica': ['', Validators.compose([Validators.required])],
     'miasto': ['', Validators.compose([Validators.required])],
     'kod': ['', Validators.pattern("\\d{2}-\\d{3}")]});
  }

  onSubmit(form: any): void {
   console.log('Złożone zamówienie:', form.value);
  }

  ngOnInit(): void {
  }

}
