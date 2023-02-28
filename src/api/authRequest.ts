import { BaseRequest } from './baseRequest';
import { IAuthResponse, IAuthSighIn, IAuthSighUp } from '../modules/auth/interfaces/auth';
import { customLocalStorage } from '../common/utils/customLocalStorage';

export class AuthRequest extends BaseRequest {
  login(body: IAuthSighIn) {
    return this.post<IAuthResponse>('/auth/login', JSON.stringify(body));
  }
  register(body: IAuthSighUp) {
    return this.post<IAuthResponse>('/auth/create', JSON.stringify(body));
  }
  logout() {
    return this.post('/auth/logout', '', customLocalStorage.getAccessToken());
  }
}
