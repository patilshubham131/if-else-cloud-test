import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DashboardDataResponse } from '../models/dashboard-data';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getDashboardData(): Observable<DashboardDataResponse>{
    return this.httpClient.get<DashboardDataResponse>('https://1.api.fy23ey05.careers.ifelsecloud.com/');
  }
}
