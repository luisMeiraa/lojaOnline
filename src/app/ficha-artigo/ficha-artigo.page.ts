import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ficha-artigo',
  templateUrl: './ficha-artigo.page.html',
  styleUrls: ['./ficha-artigo.page.scss'],
})
export class FichaArtigoPage implements OnInit {

  public artigo: any;
  public nome: any;
  public photo: any;
  public preco: any;
  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  ionViewDidEnter() {
    this.nome = this.activatedRoute.snapshot.paramMap.get("nome");
    console.log("nome do artigo: ", this.nome);

    this.photo = this.activatedRoute.snapshot.paramMap.get("photo");
    console.log("photo do artigo: ", this.photo);

    this.preco = this.activatedRoute.snapshot.paramMap.get("preco");
    console.log("preco do artigo: ", this.preco);

    this.artigo = new Object();

    this.artigo.nome = this.nome;
    this.artigo.photo = this.photo;
    this.artigo.preco = this.preco;
  }
  ngOnInit() {
  }

}



