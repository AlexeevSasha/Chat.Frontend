import { toast } from '../modules/popup/utils/toast';

export class BaseRequest {
  baseApi: string;

  constructor() {
    this.baseApi = process.env.REACT_APP_BASE_URL as string;
  }

  async fetch(url: string, data: Record<string, unknown>, token?: string) {
    const headersToken = token ? { Authorization: `Bearer ${token}` } : null;
    const headersMultiPart =
      typeof data.body === 'string' ? { 'Content-type': 'application/json;charset=utf-8' } : null;

    try {
      const response = await fetch(this.baseApi + url, {
        ...data,
        headers: {
          ...headersToken,
          ...headersMultiPart,
        },
        credentials: 'include',
      });
      if (response.ok) {
        if (response.headers.get('Content-Length') === '0') {
          return true;
        }
        const typeResponse = response.headers.get('Content-type');
        if (typeResponse === 'aplication/text') {
          return await response.text();
        }
        return await response.json();
      } else {
        const { message } = await response.json();
        throw new Error(message);
      }
    } catch (error: any) {
      toast.open({
        position: 'top-right',
        text: error?.message || 'Sorry, something went wrong.',
        type: 'error',
        timeout: 5000,
      });
    }
  }

  get<T>(url: string, token?: string): Promise<T> {
    return this.fetch(url, { method: 'GET' }, token);
  }
  post<T>(url: string, body: string | FormData, token?: string): Promise<T> {
    return this.fetch(url, { method: 'POST', body }, token);
  }
  put<T>(url: string, body: string, token: string): Promise<T> {
    return this.fetch(url, { method: 'PUT', body }, token);
  }
  delete<T>(url: string, token: string): Promise<T> {
    return this.fetch(url, { method: 'DELETE' }, token);
  }
}
