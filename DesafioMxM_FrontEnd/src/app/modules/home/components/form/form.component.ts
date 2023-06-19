import { Component, OnInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormData } from '../../models/FormData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public checkboxOptions: Array<string> = ['Pessoa física', 'Pessoa juridica'];

  public formData: Array<FormData> = [
    { label: 'Nome completo', name: 'name', placeholder: 'nome' },
    { label: 'CPF', name: 'legalId', placeholder: '000.000.000-00' },
    { label: 'Email', name: 'email', placeholder: 'example@gmail.com' },
    { label: 'Telefone', name: 'phoneNumber', placeholder: '(99) 9 9999-9999' },
    { label: 'CEP', name: 'postalCode', placeholder: '00000-000' },
    { label: 'Estado', name: 'state', placeholder: 'estado' },
    { label: 'Cidade', name: 'city', placeholder: 'cidade' },
    { label: 'Bairro', name: 'neighborhood', placeholder: 'bairro' },
    { label: 'Rua', name: 'street', placeholder: 'rua' },
    { label: 'Número', name: 'addressNumber', placeholder: 'número' },
    { label: 'Complemento', name: 'complement', placeholder: 'complemento' },
  ];

  public formRegister: FormGroup = this.formBuilder.group({
    type: ['Pessoa física'],
    name: ['', Validators.required],
    legalId: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    postalCode: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    neighborhood: ['', Validators.required],
    street: ['', Validators.required],
    addressNumber: ['', Validators.required],
    complement: [''],
  });

  public showErrors: boolean = false;
  public isLoading: boolean = false;
  public isSubmitting: boolean = false;
  public showModal: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public valueBasedOnCpfOrCnpj(value1: any, value2: any) {
    return this.formRegister.value.type === 'Pessoa física' ? value1 : value2;
  }

  public updateFormData(option: string) {
    console.log(this.formRegister.value);
    if (option === 'Pessoa juridica') {
      this.formData[0].label = 'Nome da empresa';
      this.formData[1].label = 'CNPJ';
      this.formData[1].placeholder = '00.000.000/0000-00';
    } else {
      console.log(this.formData);
      this.formData[0].label = 'Nome completo';
      this.formData[1].label = 'CPF';
      this.formData[1].placeholder = '000.000.000-00';
    }
  }

  public submitForm(): void {
    console.log(this.formRegister.value);
    if (this.formRegister.valid) {
      // console.log(this.formRegister);
      // const headers = {
      //   'Content-Type': 'application/json',
      // };

      // this.http.post(
      //   'https://localhost:7042/users',
      //   JSON.stringify(this.formRegister),
      //   { headers }
      // );

      // data.type = selectedOption;
      // data.legalId = cleanMask(data.legalId);
      // data.phoneNumber = cleanMask(data.phoneNumber);
      // data.postalCode = cleanMask(data.postalCode);
      // console.log(data);
      // this.isSubmitting = true;

      // this.showErrors = false;
      this.formRegister.reset();
    }
    this.showErrors = true;
  }
}
