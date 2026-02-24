import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  standalone: false,
  templateUrl: './edit-button.html',
  styleUrl: './edit-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditButton {
  edit() : void {
    console.log("Editado com sucesso!")
  }
}
