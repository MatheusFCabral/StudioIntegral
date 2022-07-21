import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-presencial',
  templateUrl: './presencial.component.html',
  styleUrls: ['./presencial.component.scss'],
})
export class PresencialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.showIt();
  }

  showIt() {
    setTimeout(() => {
      Swal.fire({
        imageUrl: '../assets/popup-aula.png',
        imageHeight: 450,
        imageAlt: 'Aula Experimental Gratuita',
        confirmButtonText: 'Agendar Aula',
        showDenyButton: true,
        denyButtonText: 'Fechar',
        confirmButtonColor: '#5BD53C',
        denyButtonColor: '#4d2971',
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(
            'https://api.whatsapp.com/send?phone=5511982791420&text=Ol%C3%A1%21%20Desejo%20realizar%20minha%20primeira%20aula%20gratuita%21',
            '_blank'
          );
        } else if (result.isDenied) {
          return;
        }
      });
    }, 1000);
  }
}
