import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcuViewComponent } from './calcu-view/calcu-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcuViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculatorV2';
}