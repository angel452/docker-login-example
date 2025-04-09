import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ControlUserService } from './services/control-user.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users: any[] = [];
  editingUserId: number | null = null;
  editedUser: any = {};

  constructor(
    private controlUserService: ControlUserService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadUsers();
    }
  }

  loadUsers(): void {
    this.controlUserService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  editUser(user: any): void {
    this.editingUserId = user.id;
    this.editedUser = { ...user }; // Creamos una copia para no modificar el original directamente
  }

  saveUser(): void {
    if (this.editingUserId !== null) {
      this.controlUserService.updateUser(this.editingUserId, this.editedUser).subscribe(() => {
        this.loadUsers(); // recargamos la lista
        this.cancelEdit();
      });
    }
  }

  cancelEdit(): void {
    this.editingUserId = null;
    this.editedUser = {};
  }

  deleteUser(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.controlUserService.deleteUser(id).subscribe(() => {
        this.loadUsers(); // recargamos la lista después de eliminar
      });
    }
  }
}
