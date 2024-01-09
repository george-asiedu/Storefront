import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card {
  imgClass: string
  title: string
  price: string
}
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  cards: Card[] = [
    { imgClass: 'img-1', title: 'Fendi Bag', price: '$54.87' },
    { imgClass: 'img-2', title: 'Jordan 1 - Red & Black', price: '$24.90' },
    { imgClass: 'img-3', title: 'Yellow Dress', price: '$54.87' },
    { imgClass: 'img-4', title: 'Jordan 4 - Black & Gold', price: '$37.99' },
    { imgClass: 'img-5', title: 'White Jacket', price: '$44.87' },
    { imgClass: 'img-6', title: 'Nike V2', price: '$30.64' }
  ]
  
  itemsPerPage = 6
  currentPage = 1
  totalPages = 2

  ngOnInit() {
    this.totalPages = Math.ceil(this.cards.length / this.itemsPerPage);
  }

  changePage(event: any) {
    this.currentPage = event
  }
}
