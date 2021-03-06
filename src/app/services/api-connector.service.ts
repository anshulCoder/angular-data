import {HttpService} from "./http.service";
import 'rxjs/Rx';
import {HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {reject, resolve} from "q";
import 'rxjs/add/operator/toPromise';
import {SharingService} from "./sharing.service";

const API_URL = 'http://localhost:5000';

@Injectable()
export class ApiConnectorService {

  constructor(private httpService: HttpService,
              private shareService: SharingService) {}

  getMasterData(params?: any): any {
    let whichAPI = 'fetch_master';

    let customParams = new HttpParams({
      fromObject : params
    });

    let promise = new Promise((resolve, reject) => {
      this.httpService.getRequest(API_URL+whichAPI,
        null,
        customParams)
        .toPromise()
        .then(
          res => { // Success
            resolve(res.body);
          }
        )
        .catch(error => {
          this.shareService.loadingEmit.emit({
            loading: false
          });
          this.shareService.alertEmit.emit({
            showAlert: true,
            aText: error,
            aType: 'error'
          });
        })
    });
    return promise;
  }

  postMasterData(postData: any,
             params?: any): any {
    let whichAPI = 'invoke_master';

    let customParams = new HttpParams({
      fromObject : params
    });

    let promise = new Promise((resolve, reject) => {
      this.httpService.postRequest(API_URL+whichAPI,
        postData,
        null,
        customParams)
        .toPromise()
        .then(
          res => { // Success
            resolve(res.body);
          }
        )
        .catch(error => {
          this.shareService.loadingEmit.emit({
            loading: false
          });
          this.shareService.alertEmit.emit({
            showAlert: true,
            aText: error,
            aType: 'error'
          });
        })
    });
    return promise;
  }
}
