import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  height: number;
  weight: number;
  imc: number;
  classification: string;

  constructor() {}

  calculaimc(){
    this.imc = this.weight / (this.height * this.height);

    if (this.imc > 18.4 && this.imc < 24.9 ){
      this.classification = 'Sua classificação é Normal - IMC: '+ this.imc;
    } else if (this.imc > 24.9 && this.imc < 29.9) {
      this.classification = 'Sua classificação é Sobrepeso - IMC: '+ this.imc;
    } else if (this.imc > 29.9 && this.imc < 39.9) {
      this.classification = 'Sua classificação é Obesidade - IMC: '+ this.imc;
    } else if (this.imc > 39.9) {
      this.classification = 'Sua classificação é Obesidade Grave - IMC: '+ this.imc;
    } else {
      alert('Fora da classificação IMC !');
    }
  }

}
