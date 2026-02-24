import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  standalone: false,
  templateUrl: './delete-button.html',
  styleUrl: './delete-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteButton {
  delete() : void {
    console.log("Deletado com sucesso!")
  }
}
