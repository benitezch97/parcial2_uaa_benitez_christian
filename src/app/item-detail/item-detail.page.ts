import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage {
  itemId: string | null = null;
  item: any;
  selectedState: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    if (this.itemId) {
      this.getItemDetails();
    }
  }

  getItemDetails() {
    const apiUrl = 'https://www.hostcatedral.com/api/appNoti/public/buscar/pc';

    this.http.get<any[]>(apiUrl).subscribe((response) => {
      if (response && response.length > 0) {
        this.item = response[0];
        this.selectedState = this.item.Estado;
      }
    });
  }

}
