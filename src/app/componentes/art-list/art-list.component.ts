import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrl: './art-list.component.css'
})
export class ArtListComponent {
  @Input() artes: any[] = [];
  @Output() editarArte = new EventEmitter<any>();
  @Output() deleteArte = new EventEmitter<number>();

  editaArte(art: any) {
    this.editarArte.emit(art);
  }

  deletarArte(id: number) {
    this.deleteArte.emit(id);
  }
}
