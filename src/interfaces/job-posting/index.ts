import { ApplicantInterface } from 'interfaces/applicant';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobPostingInterface {
  id?: string;
  title: string;
  description: string;
  salary: number;
  location: string;
  posted_at?: any;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  applicant?: ApplicantInterface[];
  company?: CompanyInterface;
  _count?: {
    applicant?: number;
  };
}

export interface JobPostingGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  company_id?: string;
}
