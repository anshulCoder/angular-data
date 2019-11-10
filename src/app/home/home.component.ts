import { Component, OnInit } from '@angular/core';
import { ApiConnectorService } from '../services/api-connector.service';
import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  masterServices = [];

  constructor(private apiConnector: ApiConnectorService,
              private shareService: SharingService) {

  }


  ngOnInit() {

    this.shareService.loadingEmit.emit({
      loading: true
    });
    //Getting all master data

    this.fetchMasterData().then(
      (data) => {
        this.shareService.loadingEmit.emit({
          loading: false
        });
        this.masterServices = data;
      }
    );
  }



  /* API Related space */

  async fetchMasterData() {
    return await this.apiConnector.getMasterData();
  }

}
