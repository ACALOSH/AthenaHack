import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
// import { Tab1Page } from '../../app/tab1/tab1.page';

import { NavController, NavParams } from '@ionic/angular';


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

	  	// const bytes: string = atob(this.beforephoto);
    //   	const byteNumbers = new Array(bytes.length);
    //   	for (let i = 0; i < bytes.length; i++) {
    //     	byteNumbers[i] = bytes.charCodeAt(i);
    //   	}
    //   	const byteArray = new Uint8Array(byteNumbers);

    //   	const blob: Blob = new Blob([byteArray], { type: 'image/jpeg' });

  		// this.file.writeFile(this.file.dataDirectory, 'file.jpeg', blob);

	  }, error => {
	  	console.log("oops");
	  });
	} 

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

	 //  compareSimilarity(): void {
		// // Example posting a local image file (Node.js only):
		// const fs = require('fs');

		// const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

		// deepai.setApiKey('YOUR_API_KEY');

		// var resp = await deepai.callStandardApi("image-similarity", {
		//         image1: fs.createReadStream(this.beforephoto),
		//         image2: fs.createReadStream(this.afterphoto),
		// });
		// console.log(resp);
	 //  }
}

}