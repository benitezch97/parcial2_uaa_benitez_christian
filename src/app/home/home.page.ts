import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  searchText: string = '';
  items: any[] = [
    {
      id: '1',
      image: 'assets/img/pcdell.jpg',
      name: 'Vendo pc de escritorio',
      description: 'Oferta pc de escritorio marca DELL..',
      price: 'G 3.500.000',
    },
    {
      id: '2',
      image: 'assets/img/monitor.jpg',
      name: 'Vendo monitor de 19"',
      description: 'Vendo un monitor de 19" marca AOC',
      price: 'G 300.000',
    },
    {
      id: '3',
      image: 'assets/img/externo.jpg',
      name: 'Oferta disco duro externo',
      description: 'Vendo disco externo marca DELL, de 1tb',
      price: 'G 600.000',
    },
  ];
  filteredItems: any[] = [];

  ngOnInit() {
    this.filteredItems = this.items;
  }

  search() {
    this.filteredItems = this.items.filter(item => {
      // Filtrar los items que coincidan con el searchText en el nombre o descripción
      return item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
             item.description.toLowerCase().includes(this.searchText.toLowerCase());
    });
}

}

