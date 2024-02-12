import { Component, OnInit } from '@angular/core';
import { PersonelService } from '../service/personel.service';
import { FormsModule } from '@angular/forms';
import { Personel } from '../DTO/Personel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personel-liste',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './personel-liste.component.html',
  styleUrl: './personel-liste.component.css'
})
export class PersonelListeComponent implements OnInit{
  personeller: Personel[] = [];

  constructor(private personelService: PersonelService) { }

  ngOnInit(): void {
    this.personelService.getTumPersonel().subscribe(personeler => {
      this.personeller = personeler;
    });
  }
}
