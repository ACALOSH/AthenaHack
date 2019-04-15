import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { storage, initializeApp } from 'firebase';

import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
// import { Tab1Page } from '../../app/tab1/tab1.page';

import { NavController, NavParams } from '@ionic/angular';

import * as deepai from 'deepai';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

	public checked: boolean;
	public temp: any;
	public similarity: any;
	public newstuff: any;
	public beforephoto: any;
	public afterphoto: any;
	public clicked: boolean;
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

	  	// this.similarity = this.temp.resolve();

	  	this.clicked = true;
	  	this.checked= true;

	  }, error => {
	  	console.log("oops");
	  });
	}
}
