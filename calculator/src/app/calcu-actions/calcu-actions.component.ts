import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-calcu-actions',
  standalone: true,
  imports: [],
  templateUrl: './calcu-actions.component.html',
  styleUrl: './calcu-actions.component.css'
})
export class CalcuActionsComponent {
  @Input() val1 = 0;
  @Input() val2 = 0;
  @Output() resultV2 = new EventEmitter<number>;

  //pa q borre los inputs (dps pienso como)
  @Output() cleanInputs = new EventEmitter<boolean>;

  result = 0;
  sumar(val1: number, val2: number){

    console.log("val1=", val1, " | val2=", val2);

    this.result = Number(val1) + Number(val2);
    this.resultV2.emit(this.result);

    console.log("Result=",this.result);
    console.log("ResultString=",this.resultV2);
  }

  restar(val1: number, val2: number){

    console.log("val1=", val1, " | val2=", val2);

    this.result = Number(val1) - Number(val2);
    this.resultV2.emit(this.result);

    console.log("Result=",this.result);
    console.log("ResultString=",this.resultV2);
  }

  dividir(val1: number, val2: number){

    console.log("val1=", val1, " | val2=", val2);

    this.result = Number(val1) / Number(val2);
    this.resultV2.emit(this.result);

    console.log("Result=",this.result);
    console.log("ResultString=",this.resultV2);
  }

  multiplicar(val1: number, val2: number){

    console.log("val1=", val1, " | val2=", val2);

    this.result = Number(val1) * Number(val2);
    this.resultV2.emit(this.result);

    console.log("Result=",this.result);
    console.log("ResultString=",this.resultV2);
  }

  potenciar(val1: number, val2: number){

    console.log("val1=", val1, " | val2=", val2);

    this.result = Math.pow(Number(val1),Number(val2));
    this.resultV2.emit(this.result);

    console.log("Result=",this.result);
    console.log("ResultString=",this.resultV2);
  }

  limpiar(){
    this.cleanInputs.emit(true);
  }

}
