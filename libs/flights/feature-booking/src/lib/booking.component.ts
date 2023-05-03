import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingFacade } from '@airline/flights/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'flights-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingList$ = this.bookingFacade.bookingList$;

  constructor(private bookingFacade: BookingFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.bookingFacade.load();
  }
}
