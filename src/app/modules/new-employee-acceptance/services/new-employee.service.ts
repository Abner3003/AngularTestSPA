import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeeModel } from '../../models/interfaces/IEmployee';
@Injectable({
  providedIn: 'root',
})
export class NewEmployeeService {
  constructor(private http: HttpClient) {}
  mockData = true;
  private _employeeData!: EmployeeModel;

  get cep() {
    return this._employeeData;
  }

  set cep(val: EmployeeModel) {
    this._employeeData = val;
  }

  public getEmployeeData$(cpf: string): Observable<EmployeeModel> {
    if (this.mockData) {
      const mock: EmployeeModel = {
        applicationAccount: {
          accountNumber: '55555',
          situation: 'teste',
        },
        checkingAccount: {
          cpfStatus: 'teste',
          name: 'teste',
          registerSituation: 'teste',
        },
        situation: {
          cpfStatus: 'teste',
          name: 'teste',
          registerSituation: 'teste',
        },
      };
      return of(mock);
    }
    return this.http.get<EmployeeModel>(`${environment.BACKEND_URL}/${cpf}`);
  }
}
