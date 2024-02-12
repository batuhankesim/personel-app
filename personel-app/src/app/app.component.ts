import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PersonelEkleComponent} from './personel-ekle/personel-ekle.component';
import { PersonelListeComponent } from './personel-liste/personel-liste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PersonelEkleComponent,PersonelListeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personel-app';
}
