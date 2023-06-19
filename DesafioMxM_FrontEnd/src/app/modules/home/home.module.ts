import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from 'src/app/modules/home/utils/modal/modal.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    FormComponent,
    UserInfoComponent,
    HomeComponent,
    ModalComponent,
    CheckboxComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class HomeModule {}
