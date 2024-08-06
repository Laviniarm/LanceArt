import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  artes = [
    { id: 1, titulo: 'O Eco do Vento', artista: 'Luca Dante', ano: 1985 },
    { id: 2, titulo: 'A Dança das Estrelas', artista: 'Mia Rodrigues', ano: 1892 }
  ];

  arteAtual = { id: 0, titulo: '', artista: '', ano: 0 };
  edicao = false;

  salvarArte() {
    if (this.edicao) {
      const index = this.artes.findIndex(a => a.id === this.arteAtual.id);
      if (index !== -1) {
        this.artes[index] = { ...this.arteAtual };
      }
    } else {
      this.arteAtual.id = this.artes.length + 1;
      this.artes.push({ ...this.arteAtual });
    }
    this.limparArte();
  }

  editarArte(arte: any) {
    this.arteAtual = { ...arte };
    this.edicao = true;
  }

  deleteArte(id: number) {
    this.artes = this.artes.filter(art => art.id !== id);
  }

  limparArte() {
    this.arteAtual = { id: 0, titulo: '', artista: '', ano: 0 };
    this.edicao = false;
  }
}

