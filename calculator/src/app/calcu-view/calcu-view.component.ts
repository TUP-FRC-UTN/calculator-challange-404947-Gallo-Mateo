import { Component, Input, Output } from '@angular/core';
import { CalcuActionsComponent } from '../calcu-actions/calcu-actions.component';

@Component({
  selector: 'app-calcu-view',
  standalone: true,
  imports: [CalcuActionsComponent],
  templateUrl: './calcu-view.component.html',
  styleUrl: './calcu-view.component.css'
})

export class CalcuViewComponent {
  //aca recibe el resultado
  result: number = 0;
  onOperationOptionClicked(resultV2: number){
    console.log(resultV2);
    this.result = resultV2;
    console.log(this.result);
  }

  onCleanInputsClicked(cleanInputs: boolean): void {
    console.log(cleanInputs);
    if (cleanInputs) {
      const val1Input = document.getElementById("val1") as HTMLInputElement;
      const val2Input = document.getElementById("val2") as HTMLInputElement;
      if (val1Input) {
        val1Input.value = ""; 
      }
      if (val2Input) {
        val2Input.value = ""; 
      }
      this.val1 = 0;
      this.val2 = 0;
    }
  }

  //aca manda los valores al component hijo
  @Input() val1: number = 0;
  @Input() val2: number = 0;

  val1Changed(event: any){
    console.log(event.target.value);
    this.val1 = event.target.value;
    console.log("val1 =", this.val1);
  }

  val2Changed(event: any){
    console.log(event.target.value);
    this.val2 = event.target.value;
    console.log("val2 =", this.val2);
  }
}
