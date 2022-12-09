import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QrCodesService {
  constructor(private http: HttpClient) {}

  async printQRCodes(container_array: any[] | undefined) {
    const containers = container_array?.map((container) => {
      return {
        containerID: container.id,
        containerName: container.cName,
        roomName: container.pName,
      };
    });

    const stringContainers = JSON.stringify({ containers });

    this.http
      .post<any>(
        'https://q3zo38dhlg.execute-api.us-east-1.amazonaws.com/default/generateAndSaveQRCode',
        stringContainers
      )
      .subscribe((result) => {
        const res = result.toString();
        window.open(res, '_blank');
      });
  }

  async printInsuranceForm(item_array: any | undefined) {
    this.http
      .post<any>(
        'https://az2q4q4zji.execute-api.us-east-1.amazonaws.com/default/generateInsuranceDocs',
        JSON.stringify({ item_array })
      )
      .subscribe((result) => {
        const res = result.toString();
        window.open(res, '_blank');
      });
  }
}
