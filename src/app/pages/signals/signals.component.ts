import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  effect,
  signal,
  viewChild
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { CompaniesTableComponent } from '../../components/companies-table/companies-table.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { Company } from './../../interfaces/signals.interface';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    ProgressBarComponent,
    CompaniesTableComponent,
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent implements OnInit {
  counter = 0;

  companies = signal<Company[]>([
    {
      stockName: 'Company A',
      price: 50.25,
      quantity: 100,
      total: 5025.0,
    },
    {
      stockName: 'Company B',
      price: 75.6,
      quantity: 150,
      total: 11340.0,
    },
    {
      stockName: 'Company C',
      price: 30.8,
      quantity: 200,
      total: 6160.0,
    },
  ]);

  signalCounter = toSignal(interval(1000), { initialValue: 0 });
  companyTable = viewChild('companyTable', {
    read: ElementRef,
  });

  counterQuery = viewChild('counterSignal', { read: CounterComponent });
  counterNumber!: number;

  constructor() {
    effect(() => {
      this.counterNumber = this.counterQuery()?.counter()!;
    });
  }

  ngOnInit(): void {}
}
