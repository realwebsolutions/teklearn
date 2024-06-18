import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule, } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css'
})
export class WorkshopComponent {

}
