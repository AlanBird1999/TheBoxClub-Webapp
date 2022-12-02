import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {API, Auth} from 'aws-amplify'
import { authFieldsWithDefaults } from '@aws-amplify/ui';
import * as mutations from "../../graphql/mutations";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  roomData:any;
  residenceData: any;
  loading: any;
  closeResult: string;
  constructor(
    private modalService: NgbModal
    ) {
      this.closeResult = "";
     }

  ngOnInit(): void {
    Auth.currentUserInfo().then((userInfo: any)=> {
      console.log(userInfo);
      this.getResidence(userInfo);
    })
    
  }

  async getResidence(userInfo: any){
    const dataResidence: any = await API.graphql({
      query: `
      query ListResidences(
        $limit: Int
        $nextToken: String
      ) {
        listResidences(filter: { rName: { eq: "${userInfo.username}" }}, limit: $limit, nextToken: $nextToken) {
          items {
            id
            rName
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`,
    });
    dataResidence.data.listResidences.items =
          dataResidence.data.listResidences.items.filter(
            (r: any) => !r._deleted
          );
          if (!dataResidence.data.listResidences.items[0]) {
            const residenceDetails = {
              rName: userInfo.username,
            };
            const newResidence: any = await API.graphql({
              query: mutations.createResidence,
              variables: { input: residenceDetails },
            });
  
            dataResidence.data.listResidences.items[0] =
              newResidence.data.createResidence;
            //TODO: right around here if we want the ability to have multiple users to a single residence
            //this is where we can prompt them to give a residence head
          }
          const residence: any = dataResidence.data.listResidences.items[0];

        const allObjects = await this.getAllObjects(residence.id);
        this.roomData = allObjects;
        const populatedDataResidence: any = {
          Places: allObjects,
          id: residence.id,
          rName: residence.rName,
        };
        this.residenceData = populatedDataResidence;
        this.loading = false;

          
    // add logic to check if there is a residency if not create residency
    
    console.log(dataResidence);
    console.log("residenceData");
    console.log(this.residenceData);
    console.log("allObjects");
    console.log(allObjects);
  }

  

  async getAllObjects(residenceId: number): Promise<any> {
    const ojbectArray = [];
    const places: any = await API.graphql({
      query: `query ListPlaces(
        $limit: Int
        $nextToken: String
      ) {
        listPlaces(filter: {residenceID: {eq: "${residenceId}"}}, limit: $limit, nextToken: $nextToken) {
          items {
            id
            pName
            residenceID
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`,
    });
    // Foreach place, get all containers
    for (const place of places.data.listPlaces.items) {
      const containers: any = await API.graphql({
        query: `query ListContainers(
          $limit: Int
          $nextToken: String
        ) {
          listContainers(filter: { placeID: { eq: "${place.id}" } }, limit: $limit, nextToken: $nextToken) {
            items {
              id
              cName
              placeID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            nextToken
            startedAt
          }
        }`,
      });
      const formattedContainers: any = [];
  
      for (const container of containers.data.listContainers.items) {
        const items: any = await API.graphql({
          query: `query ListItems(
            $limit: Int
            $nextToken: String
          ) {
            listItems(filter: { containerID: { eq: "${container.id}" } }, limit: $limit, nextToken: $nextToken) {
              items {
                id
                description
                iName
                photo
                containerID
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              nextToken
              startedAt
            }
          }`,
        });
        formattedContainers.push({
          id: container.id,
          cName: container.cName,
          items: items.data.listItems.items.map((item: any) => {
            return {
              id: item.id,
              iName: item.iName,
              description: item.description,
              photo: item.photo,
            };
          }),
        });
      }
  
      //TODO we are going to need to also populate each container with it's items
      ojbectArray.push({
        pName: place.pName,
        id: place.id,
        containers: formattedContainers,
      });
    }
    return ojbectArray;
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmitNewRoom (f: NgForm) {
    // add rooms
    console.log(f.value.roomname)
    this.saveRoom(this.residenceData, f.value.roomname)
    this.modalService.dismissAll(); // dismiss the modal
  }

  async saveRoom(
    residenceProps: any,
    placeName: string,
  ) {
    const placeDetails = {
      pName: placeName,
      residenceID: residenceProps.id,
    };
    const newResidence: any = await API.graphql({
      query: mutations.createPlace,
      variables: { input: placeDetails },
    });
  
    // Alert.alert("Successfully created room", "Room name: " + placeName, [
    //   {
    //     text: "OK",
    //     style: "cancel",
    //   },
    // ]);
    location.reload
  }
}
