import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { API, Auth } from 'aws-amplify';
import { Storage } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import { RoomControllService } from '../services/room-controll.service';
import { Router } from '@angular/router';

export interface ResidenceData {
  Places: Place[];
  id: string;
  rName: string;
}

export interface Place {
  containers: Container[];
  id: string;
  pName: string;
}

export interface Container {
  cName: string;
  id: string;
  items: Item[];
}

export interface Item {
  description: string;
  iName: string;
  id: string;
  photo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  roomData: any;
  residenceData: ResidenceData | undefined;
  loading = true;
  closeResult: string;
  selectedPlace: Place | undefined;
  alertText = '';
  selectedFile: any;
  @ViewChild('alert', { read: TemplateRef }) alert:
    | TemplateRef<any>
    | undefined;

  constructor(
    private modalService: NgbModal,
    private readonly roomControllerService: RoomControllService,
    private readonly router: Router
  ) {
    this.closeResult = '';
  }

  ngOnInit(): void {
    Auth.currentUserInfo().then((userInfo: any) => {
      console.log(userInfo);
      this.getResidence(userInfo);
    });
  }

  async getResidence(userInfo: any) {
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
      dataResidence.data.listResidences.items.filter((r: any) => !r._deleted);
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
    console.log('residenceData');
    console.log(this.residenceData);
    console.log('allObjects');
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
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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

  onSubmitNewRoom(f: NgForm) {
    // add rooms
    console.log(f.value.roomname);
    if (f.value.roomname === '') {
      this.displayAlert('You must provide a name for your room');
    } else {
      this.saveRoom(f.value.roomname);
      this.modalService.dismissAll();
    }
  }

  onSubmitNewContainer(f: NgForm) {
    console.log(f.value);
    const { containerPlaceSelect, containerName } = f.value;
    if (containerPlaceSelect === '' || containerName === '') {
      this.displayAlert(
        'You must select a room and provide a name for your container.'
      );
    } else {
      const selectedPlace = this.residenceData?.Places.filter(
        (place) => place.pName === containerPlaceSelect
      )[0];
      this.saveContainer(containerName, selectedPlace);
      this.modalService.dismissAll();
    }
  }

  onSubmitNewItem(f: NgForm) {
    const { itemPlaceSelect, itemContainerSelect, itemName, itemDescription } =
      f.value;
    if (
      itemPlaceSelect === '' ||
      itemContainerSelect === '' ||
      itemName === '' ||
      itemDescription === ''
    ) {
      this.displayAlert(
        'You must select a room with a container and provide a name and description'
      );
    } else {
      //TODO need to implement photo upload
      const selectedContainer = this.residenceData?.Places.filter(
        (place) => place.pName === itemPlaceSelect
      )[0].containers.filter(
        (container) => container.cName === itemContainerSelect
      )[0];
      this.saveItem(
        selectedContainer,
        itemDescription,
        itemName,
        this.selectedFile
      );
      this.modalService.dismissAll();
    }
  }

  onSelectItem(f: NgForm) {
    console.log(f);
  }

  setSelectedPlace(event: any) {
    this.selectedPlace = this.residenceData?.Places.filter(
      (place) => place.pName === event.srcElement.value
    )[0];
  }

  async saveRoom(placeName: string) {
    const placeDetails = {
      pName: placeName,
      residenceID: this.residenceData?.id,
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
    window.location.reload();
  }

  async saveContainer(containerName: string, placeProps: Place | undefined) {
    const containerDetails = {
      cName: containerName,
      placeID: placeProps?.id,
    };
    await API.graphql({
      query: `mutation CreateContainer(
        $input: CreateContainerInput!
        $condition: ModelContainerConditionInput
      ) {
        createContainer(input: $input, condition: $condition) {
          id
          placeID
          Items {
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`,
      variables: { input: containerDetails },
    });

    window.location.reload();
  }

  imageSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    console.log('input files', input.files);
    this.selectedFile = input.files[0];
  }

  async saveItem(
    containerProps: Container | undefined,
    itemDescription: string,
    itemName: string,
    imageUri: any
  ) {
    console.log(imageUri);
    const uploadResult = await this.pathToImageFile(itemName, imageUri);

    let url = '';
    if (uploadResult) {
      console.log('upload result', uploadResult);
      url = uploadResult.key;
    }

    const itemDetails = {
      iName: itemName,
      description: itemDescription,
      containerID: containerProps?.id,
      photo: url,
    };
    await API.graphql({
      query: `mutation CreateItem(
        $input: CreateItemInput!
        $condition: ModelItemConditionInput
      ) {
        createItem(input: $input, condition: $condition) {
          id
          description
          iName
          containerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`,
      variables: { input: itemDetails },
    });

    // window.location.reload();
  }

  openContainer(pName: string, cName: string) {
    this.roomControllerService.setCurrentContainer(
      this.residenceData?.Places.filter(
        (place) => place.pName === pName
      )[0].containers.filter((container) => container.cName === cName)[0]
    );
    this.router.navigate(['room-view']);
    console.log(pName, cName);
  }

  async pathToImageFile(iName: string, imageUri: any) {
    try {
      return await Storage.put(iName, imageUri, {
        contentType: 'image/jpeg',
        expires: new Date('2023-1-1'),
      });
    } catch (err) {
      console.log('Error uploading file:', err);
      return null;
    }
  }

  displayAlert(alertText: string) {
    this.alertText = alertText;
    this.open(this.alert);
  }
}
