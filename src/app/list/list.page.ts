
import { Component, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';
import { Router } from '@angular/router'
import { FichaArtigoPage } from '../ficha-artigo/ficha-artigo.page';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage {

  public artigos: Array<object> = [];

  constructor(private router: Router, public navCtrl: NavController) {
    this.artigos = [
      {
        "nome": 'bolo1',
        "photo": 'bolo.jpg',
        "preco": '10€'
      },
      {

        "nome": 'mesa2',
        "photo": 'mesa.jpg',
        "preco": '12€'
      }
      ,
      {
        "nome": 'exemplo2',
        "photo": 'bolo.jpg',
        "preco": '16€'
      }
      ,
      {
        "nome": 'exemplo3',
        "photo": 'mesa.jpg',
        "preco": '15€'
      },
    ]
  }

  @ViewChild(IonContent) content: IonContent;

  public backToStart(): void {
    this.content.scrollToTop();
  }

  public isSearchbarOpened = false;


  onSearch(event) {
    console.log(event.target.value);
  }

  ngOnInit() {
  }



  goToFichaArtigo(artigo) {
    console.log(artigo);
    this.router.navigate(['ficha-artigo', { nome: artigo.nome, photo: artigo.photo, preco: artigo.preco }]);

  }




  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
