import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewEmployeeAcceptanceRoutingModule } from './new-employee-acceptance-routing.module';
import { NewEmplAcceptanceComponent } from './components/new-empl-acceptance/new-empl-acceptance.component';
import { SharedModule } from '../shared/shared.module';
import { NewEmployeeInputComponent } from './components/new-empl-acceptance/new-empl-input/new-employee-input.component';
import { NewEmployeeCardsComponent } from './components/new-empl-acceptance/new-empl-input/new-employee-cards/new-employee-cards.component';

@NgModule({
  declarations: [NewEmplAcceptanceComponent, NewEmployeeInputComponent, NewEmployeeCardsComponent],
  imports: [CommonModule, NewEmployeeAcceptanceRoutingModule, SharedModule],
})
export class NewEmployeeAcceptanceModule {}
