import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the AddItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html'
})
export class AddItemPage {
  title;
  description;

  constructor(public navCtrl: NavController, public view: ViewController) {}

  saveItem(){
    let newItem = {
      title: this.title,
      description: this.description
    };
    this.view.dismiss(newItem);
  }
  
  close(){
    this.view.dismiss();
  }

}
