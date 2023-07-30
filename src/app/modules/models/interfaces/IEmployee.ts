export interface EmployeeModel {
  situation: situationModel;
  applicationAccount: applicationAccount;
  checkingAccount: checkingAccount;
}

interface situationModel {
  registerSituation: string;
  name: string;
  cpfStatus: string;
}

interface applicationAccount {
  situation: string;
  accountNumber: string;
}

interface checkingAccount {
  registerSituation: string;
  name: string;
  cpfStatus: string;
}
