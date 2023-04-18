import { IRequestsBaseResponse } from '../../../../../common/interfaces/requests-base-response.interface';

export interface IAuthResponse extends IRequestsBaseResponse {
	access_token: string;
}
