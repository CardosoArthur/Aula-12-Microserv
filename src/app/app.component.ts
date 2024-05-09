
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'Aula12';


//   desabilitado: boolean = true;

//   imageUrl: String = "https://fastly.picsum.photos/id/1/200/200.jpg?hmac=jZB9EZ0Vtzq-BZSmo7JKBBKJLW46nntxq79VMkCiBG8"


// }


import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'introducao-angular';

  isMouseOver: boolean = false;
  valorAtual: string = '';
  valorSalvo: string = '';
  desabilitado : boolean = false;

  botaoClicado() {
    alert('Botão clicado!');
    this.desabilitado = !this.desabilitado
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = event.key;
  }

  salvarValor(event: any) {
    this.valorSalvo = event;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
