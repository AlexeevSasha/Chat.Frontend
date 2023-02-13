export class BaseRequest {
  baseApi: string;

  constructor() {
    this.baseApi = process.env.REACT_APP_BASE_URL as string;
  }

  async fetch(url: string, data: Record<string, any>, token?: string) {
    const headersToken = token ? { Authorization: `Bearer ${token}` } : null;
    const headersMultiPart =
      typeof data.body === 'string' ? { 'Content-type': 'application/json;charset=utf-8' } : null;

    const response = await fetch(this.baseApi + url, {
      ...data,
      headers: {
        ...headersToken,
        ...headersMultiPart,
      },
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
      throw await response.json();
    }
  }

  get(url: string, token?: string) {
    return this.fetch(url, { method: 'GET' }, token);
  }
  post(url: string, body: string | FormData, token?: string) {
    return this.fetch(url, { method: 'POST', body }, token);
  }
  put(url: string, body: string, token: string) {
    return this.fetch(url, { method: 'PUT', body }, token);
  }
  delete(url: string, token: string) {
    return this.fetch(url, { method: 'DELETE' }, token);
  }
}
