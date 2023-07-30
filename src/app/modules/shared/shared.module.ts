import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/molecules/header/header.component';
import { MenuSideComponent } from './components/molecules/menu-side/menu-side.component';
import { MainTemplateComponent } from './components/organism/main-template/main-template.component';
import { SteperComponent } from './components/atoms/steper/steper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AvatarPhotoComponent } from './components/atoms/avatar-photo/avatar-photo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuSideComponent,
    MainTemplateComponent,
    SteperComponent,
    AvatarPhotoComponent,
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    MenuSideComponent,
    MainTemplateComponent,
    SteperComponent,
    SteperComponent,
  ],
})
export class SharedModule {}
