import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ReviewService} from "../../../core/services/api/review.service";

@Component({
  selector: 'review',
  templateUrl: './review.component.html'
})
export class ReviewComponent {


  review: any[] = [];  // Placeholder for blog data

  itemsPerPage = 1;  // Number of items to show per page
  currentPage = 1;  // Current page being displayed
  totalPages: any;  // Total number of pages

  spinner: boolean = false;  // Spinner to show loading state

  // Decorator to get a reference to the MatPaginator component
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private api: ReviewService) {
  }

  ngOnInit() {
    this.loadAllReviews();  // Load blog data when component is initialized
  }

  // Function to load all blog data
  loadAllReviews() {
    this.spinner = true;  // Show loading spinner
    this.api.getAllReviews().subscribe(
      (data) => {
        this.spinner = false;  // Hide loading spinner on successful data fetch
        this.review = data;  // Assign the fetched data to the blog variable
        this.currentPage = 1;  // Reset to the first page when new data is loaded
        this.calculateTotalPages();  // Calculate the total number of pages based on the data
      }, error => {
        console.error(error);
        this.spinner = false;  // Hide loading spinner on error
      }
    );
  }

// Function to get a slice of the blog data for the current page
  getPaginatedReview(): any[] {
    this.calculateTotalPages();  // Calculate the total number of pages based on the blog data

    // Calculate the starting index of the blog data for the current page
    const startIndex: number = (this.currentPage - 1) * this.itemsPerPage;

    // Calculate the ending index of the blog data for the current page
    const endIndex = startIndex + this.itemsPerPage;

    // Return a slice of the blog data for the current page based on the calculated indices
    return this.review.slice(startIndex, endIndex);
  }

  // Function to calculate the total number of pages
  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.review.length / this.itemsPerPage);  // Calculate the total number of pages
  }

  // Function to go to the previous page
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;  // Decrease the current page if not on the first page
    }
  }

  // Function to go to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;  // Increase the current page if not on the last page
    }
  }

}
