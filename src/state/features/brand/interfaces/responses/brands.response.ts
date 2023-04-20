import { IRequestsBaseResponse } from '../../../../../common/interfaces/requests-base-response.interface';
import { IBrand } from '../brand.interface';

export interface IBrandsResponse extends IRequestsBaseResponse {
	brands: IBrand[];
}
