import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from 'aws-amplify';
import { Container, Item } from '../home/home.component';
import { RoomControllService } from '../services/room-controll.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css'],
})
export class RoomViewComponent implements OnInit {
  container: Container | undefined;
  listOfImages: any;
  constructor(
    private readonly roomController: RoomControllService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.container = this.roomController.container;
    if (!this.container) this.router.navigate(['']);
    console.log(this.container);
    this.listOfImages = {};
    this.loadImages();
  }

  async loadImages() {
    for (let item of this.container?.items || []) {
      let imageUri = await Storage.get(item.photo);
      console.log(imageUri);
      this.listOfImages[item.iName] = imageUri;
    }
  }
}
