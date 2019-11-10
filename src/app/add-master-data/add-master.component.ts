import { Component, OnInit } from '@angular/core';
import { ApiConnectorService } from '../services/api-connector.service';
import { SharingService } from '../services/sharing.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add-master.component.html',
  styleUrls: ['./add-master.component.scss']
})
export class AddMasterComponent implements OnInit {

  constructor(private apiConnector: ApiConnectorService,
              private shareService: SharingService) {

  }


  ngOnInit() {

  }

  saveMasterData(mainForm: NgForm) {
    console.log(mainForm);
    if (mainForm.invalid) {
      this.shareService.alertEmit.emit({
        showAlert: true,
        aText: 'All Fields are required!',
        aType: 'error'
      });
      return false;
    }

    console.log(mainForm.value);
    this.shareService.loadingEmit.emit({
      loading: true
    });
    this.storeMasterData({payload: mainForm.value}).then(
      (data) => {
        this.shareService.loadingEmit.emit({
          loading: false
        });
        if (data.status === true) {
          window.location.reload();
        } else {
          this.shareService.alertEmit.emit({
            showAlert: true,
            aText: data.errorMsg,
            aType: 'error'
          });
        }
      }
    );
  }



  /* API Related space */

  async storeMasterData(postData) {
    return await this.apiConnector.postMasterData(postData);
  }

}