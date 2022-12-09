import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QrCodesService {

  constructor(private http: HttpClient)
  { }

  async printQRCodes(container_array: any[] | undefined, callback: any) {

    const containers = container_array?.map((container) => {
      return {
        containerID: container.id,
        containerName: container.cName,
        roomName: container.pName,
      };
    });

    const stringContainers = JSON.stringify({ containers });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "http://localhost:4200/");

    
    this.http.post<any>(
      "https://q3zo38dhlg.execute-api.us-east-1.amazonaws.com/default/generateAndSaveQRCode",
      stringContainers,
    ).subscribe((result) => {
      console.log("hi there" , result);
      const res = result.toString().substring(1, result.toString().length - 1);
      console.log("res", res);
      window.open(
        res,
        '_blank'
      );
    });
    
    //   "https://q3zo38dhlg.execute-api.us-east-1.amazonaws.com/default/generateAndSaveQRCode",
    //   {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: JSON.stringify({ containers }),
    //     redirect: "follow",
    //   }
    // )
    //   .then((response) => response.text())
    //   .then(async (result) => {
    //     const res = result.substring(1, result.length - 1);
    //     console.log("res", res);
    //     window.open(
    //       res,
    //       '_blank' 
    //     );
    //   })
    //   // .catch((error) => {
    //   //   console.log("error", error);
    //   //   // callback("Error proccessing request");
    //   // })
    //   ;
  }

  async printInsuranceForm(item_array: any[], callback: any) {

    // Alert.alert("Loading", "Loading insurance claims pdf in phone browser...", [
    //   {
    //     text: "OK",
    //     style: "cancel",
    //   },
    // ]);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch(
      "https://az2q4q4zji.execute-api.us-east-1.amazonaws.com/default/generateInsuranceDocs",
      {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ item_array }),
        redirect: "follow",
      }
    )
      .then((response) => response.text())
      .then(async (result) => {
        const res = result.substring(1, result.length - 1);
        // await Linking.openURL(res);
      })
      .catch((error) => {
        console.log("error", error);
        // Alert.alert("Error", "An error has occured generating your document", [
        //   {
        //     text: "OK",
        //     style: "cancel",
        //   },
        // ]);
      });
}


}
