import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera , CameraOptions} from '@ionic-native/camera';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

/**
 * Generated class for the OpcionalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opcionales',
  templateUrl: 'opcionales.html',
})
export class OpcionalesPage {

  sampleForm: FormGroup;
  termsAgree: boolean;
  private base64Image: string;
  descripcion: number;
  foto: number;
  email: number;
 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private camara: Camera) {
      this.permiteDescripcion(this.navParams.get('descripcion'));
      this.permiteFoto(this.navParams.get('foto'));
      this.permiteEmail(this.navParams.get('email'));
  }

  permiteDescripcion(descripcion: number){
      this.descripcion = descripcion;
      console.log("DESCRIPCION: "+this.descripcion);
  }

  permiteFoto(foto: number){
    this.foto = foto;
    console.log("FOTO: "+this.foto);
  }

  permiteEmail(email: number){
    this.email = email;
    console.log("EMAIL: "+this.email);
  }

  tomarFoto(){
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camara.DestinationType.FILE_URI,
      encodingType: this.camara.EncodingType.JPEG,
      mediaType: this.camara.MediaType.PICTURE
    }
    
    this.camara.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image =  imageData;
    }, (err) => {
     // Handle error
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcionalesPage');
  }

  //Metodso para validar FORMULARIO (email)
  
ionViewWillLoad() {
    this.termsAgree = true;
 
    this.sampleForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
 
    this.sampleForm.valueChanges
      .debounceTime(400)
      .subscribe(data => this.onValueChanged(data));
}

onValueChanged(data?: any) {
    if (!this.sampleForm) { return; }
    const form = this.sampleForm;
    for (const field in this.formErrors) {
      // Limpiamos los mensajes anteriores
      this.formErrors[field] = [];
      this.sampleForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field].push(messages[key]);
        }
      }
    }
}

formErrors = {
    'email': []
};
 
validationMessages = {
    'email': {
      'pattern':       'Formato invalido'
    },
};
}
