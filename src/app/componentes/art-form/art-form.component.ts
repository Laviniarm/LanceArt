import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-art-form',
  templateUrl: './art-form.component.html',
  styleUrl: './art-form.component.css'
})
export class ArtFormComponent {
  @Input() artes: any[] = [];
  @Input() arte: any = { id: 0, titulo: '', artista: '', ano: 0 };
  @Input() edicao: boolean = false;

  @Output() arteSalva = new EventEmitter<any>();
  @Output() artePostada = new EventEmitter<void>();

  salvarArte() {
    this.arteSalva.emit(this.arte);
    this.arte = { id: 0, titulo: '', artista: '', ano: 0 };
    this.edicao = false;
    this.artePostada.emit();
  }
}
