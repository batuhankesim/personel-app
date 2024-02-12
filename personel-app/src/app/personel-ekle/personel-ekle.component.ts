import { Component } from '@angular/core';
import { Personel } from '../DTO/Personel';
import { PersonelService } from '../service/personel.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personel-ekle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personel-ekle.component.html',
  styleUrl: './personel-ekle.component.css'
})
export class PersonelEkleComponent {
  yeniPersonel: Personel = new Personel();

  constructor(private personelService: PersonelService) { }


  personelekle(): void {
    const Personel: Personel = { };
    this.personelService.personelEkle(Personel).subscribe(() => {
      // Ekleme işlemi başarılı olduğunda yapılacak işlemler
    });
  }
}
