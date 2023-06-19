import { Component } from '@angular/core';
import { UserData } from '../../models/UserData';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  public userData: Array<UserData> = [
    { label: 'Nome Completo', name: '' },
    { label: 'CPF/CNPJ', name: '' },
    { label: 'Email', name: '' },
    { label: 'Telefone', name: '' },
    { label: 'CEP', name: '' },
    { label: 'Estado', name: '' },
    { label: 'Cidade', name: '' },
    { label: 'Bairro', name: '' },
    { label: 'Rua', name: '' },
    { label: 'Número', name: '' },
    { label: 'Complemento', name: '' },
  ];

  constructor() {}
}
