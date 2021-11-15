import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '@env/environment';

const SUBSCRIPTION_API_PATH = `${environment.apiEndpointTemplate}/subscription`.replace(
  '{{gateway}}',
  environment.subscriptionApiGateway
);

@Injectable({
  providedIn: 'root',
})
export class SubscriptionApiService {
  constructor(private httpClient: HttpClient) {}

  getSubscriptionApiPath(): string {
    return SUBSCRIPTION_API_PATH;
  }

  subscribe(emailId:string){
    return this.httpClient.post(`${SUBSCRIPTION_API_PATH}/subscribe`, { emailId}); 
  }

}
