interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Applicant'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read job postings', 'Apply to job postings', 'Edit application details', 'Delete application'],
  ownerAbilities: [
    'Manage job postings',
    'Manage applicant information',
    'Manage employee information',
    'Manage HR Manager information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f3b4d44b-910f-44ae-8439-cc360d2ea8aa',
};
