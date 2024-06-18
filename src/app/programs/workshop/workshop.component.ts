import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule, } from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [MatIconModule,RouterLink],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css'
})
export class WorkshopComponent {


}
