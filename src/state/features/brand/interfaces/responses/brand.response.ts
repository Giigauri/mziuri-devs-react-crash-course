import { IRequestsBaseResponse } from '../../../../../common/interfaces/requests-base-response.interface';
import { IBrand } from '../brand.interface';

export interface IBrandResponse extends IRequestsBaseResponse {
	brand: IBrand;
}
