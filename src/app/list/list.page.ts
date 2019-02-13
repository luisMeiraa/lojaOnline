
import { Component, ViewChild, } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {

  

  @ViewChild(IonContent) content: IonContent;
  
	public backToStart(): void {
	  this.content.scrollToTop();
  }

  public isSearchbarOpened = false;
 

  onSearch(event){
    console.log(event.target.value);
  }
  
  ngOnInit() {
  }





  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
