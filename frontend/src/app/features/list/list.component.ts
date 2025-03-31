import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, AfterViewInit {
  characters: any[] = [];
  newCharacter = { name: '', height: null, mass: null };

  @ViewChild('addCharacterModal', { static: false }) modalElement!: ElementRef;
  private modalInstance!: Modal | null;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  ngAfterViewInit() {
    if (this.modalElement) {
      this.modalInstance = new Modal(this.modalElement.nativeElement);
    }
  }

  loadCharacters() {
    this.characterService.getCharacters().subscribe((data) => {
      this.characters = data;
    });
  }

  deleteCharacter(id: number) {
    if (confirm('¿Estás seguro de eliminar este personaje?')) {
      this.characterService.deleteCharacter(id).subscribe(() => {
        this.characters = this.characters.filter((c) => c.id !== id);
      });
    }
  }

  saveCharacter() {
    if (this.newCharacter.name && this.newCharacter.height && this.newCharacter.mass) {
      this.characterService.createCharacter(this.newCharacter).subscribe(
        (savedCharacter) => {
          this.characters.push(savedCharacter); 
          this.newCharacter = { name: '', height: null, mass: null }; 
          this.closeModal(); 
        },
        (error) => {
          console.error('Error al guardar el personaje:', error);
        }
      );
    }
  }

  openModal() {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }

  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }
}
