import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Company } from '../../interfaces/signals.interface';

@Component({
  selector: 'app-companies-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './companies-table.component.html',
  styleUrl: './companies-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesTableComponent {
  companies = input<Company[]>([]);
  totalPrice = computed(() =>
    this.companies().reduce((acc, company) => acc + company.total, 0)
  );
}
