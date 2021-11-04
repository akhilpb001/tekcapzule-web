import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

const USER_API_PATH = 'https://{{user-gateway}}.execute-api.us-east-2.amazonaws.com/{{stage}}/user'
  .replace('{{user-gateway}}', environment.userApiGateway)
  .replace('{{stage}}', environment.apiStageEnv);

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private httpClient: HttpClient) {}

  getUserApiPath(): string {
    return USER_API_PATH;
  }

  getUser(): Observable<any> {
    return this.httpClient.post(`${USER_API_PATH}/get`, {});
  }
}
