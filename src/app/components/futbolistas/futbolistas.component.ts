import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Futbolista } from '../../models/futbolista.model';
import { FutbolistasService } from '../../services/futbolistas.service';

@Component({
  selector: 'app-futbolistas',
  standalone: false,
  templateUrl: './futbolistas.component.html',
  styleUrl: './futbolistas.component.css'
})
export class FutbolistaSComponent implements OnInit {

  futbolistas: Futbolista[] = [];
  modelo: Futbolista = { nombre: '', posicion: '', edad: 0, nacionalidad: '', club: '' };
  editMode = false;
  editId: string | null = null;

  constructor(private futbolistasSvc: FutbolistasService) {}

  ngOnInit(): void {
    this.cargarFutbolistas();
  }

  cargarFutbolistas() {
    this.futbolistasSvc.getFutbolistas().subscribe({
      next: data => this.futbolistas = data,
      error: err => console.error(err)
    });
  }

  guardar() {
    if (this.editMode && this.editId) {
      this.futbolistasSvc.actualizarFutbolista(this.editId, this.modelo).subscribe(() => {
        this.limpiarFormulario();
        this.cargarFutbolistas();
      });
    } else {
      this.futbolistasSvc.crearFutbolista(this.modelo).subscribe(() => {
        this.limpiarFormulario();
        this.cargarFutbolistas();
      });
    }
  }

  editar(futbolista: Futbolista) {
    this.editMode = true;
    this.editId = futbolista._id ?? null;
    this.modelo = {
      nombre: futbolista.nombre,
      posicion: futbolista.posicion,
      edad: futbolista.edad,
      nacionalidad: futbolista.nacionalidad,
      club: futbolista.club
    };
  }

  eliminar(id?: string) {
    if (!id) return;
    if (!confirm('¿Deseas eliminar este usuario?')) return;

    this.futbolistasSvc.eliminarFutbolista(id).subscribe(() => {
      this.cargarFutbolistas();
    });
  }

  limpiarFormulario() {
    this.modelo = { nombre: '', posicion: '', edad: 0, nacionalidad: '', club: '' };
    this.editMode = false;
    this.editId = null;
  }
}

