import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

	beforephoto: any;
	afterphoto: any;
	clicked: boolean;
	public post1: any = {color: 'primary'};
	public post2: any = {color: 'primary'};

	constructor(public cameraPlugin: Camera) {};

	takeBeforePicture(): void {
	this.post1.color = 'light';
	this.cameraPlugin.getPicture({
    quality : 95,
    targetWidth: 300,
    targetHeight: 300,
    destinationType : this.cameraPlugin.DestinationType.DATA_URL,
    sourceType : this.cameraPlugin.PictureSourceType.CAMERA,
    encodingType: this.cameraPlugin.EncodingType.JPEG,
    mediaType: this.cameraPlugin.MediaType.PICTURE,
		
	  }).then((imageData) => {
	  	this.beforephoto = 'data:image/jpeg;base64,' + imageData;
	  }, error => {
	  	console.log("oops");
	  });
};

	takeAfterPicture(): void {
	this.post2.color = 'light';
	this.cameraPlugin.getPicture({
    quality : 95,
    targetWidth: 300,
    targetHeight: 300,
    destinationType : this.cameraPlugin.DestinationType.DATA_URL,
    sourceType : this.cameraPlugin.PictureSourceType.CAMERA,
    encodingType: this.cameraPlugin.EncodingType.JPEG,
    mediaType: this.cameraPlugin.MediaType.PICTURE,
		
	  }).then((imageData) => {
	  	this.afterphoto = 'data:image/jpeg;base64,' + imageData;
	  	this.clicked = true;

	  }, error => {
	  	console.log("oops");
	  });
}

}