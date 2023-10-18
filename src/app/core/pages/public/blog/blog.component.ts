import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from "rxjs";
import {BlogService} from "../../../services/api/blog.service";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit, OnDestroy {

  blog: any[] = [];  // Placeholder for blog data

  heroData = {
    naslov: 'Blog',
    path: ''
  }

  itemsPerPage = 10;  // Number of items to show per page
  currentPage = 1;  // Current page being displayed
  totalPages: any;  // Total number of pages

  spinner: boolean = false;  // Spinner to show loading state

  // Subject for component destruction
  private destroy$: Subject<boolean> = new Subject<boolean>();

  // Decorator to get a reference to the MatPaginator component
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private api: BlogService, private router: Router) {
  }

  ngOnInit() {
    this.loadAllBlog();  // Load blog data when component is initialized
  }

  // Function to load all blog data
  loadAllBlog() {
    this.spinner = true;  // Show loading spinner
    this.api.getAllBlog().subscribe(
      (data) => {
        this.spinner = false;  // Hide loading spinner on successful data fetch
        this.blog = data;  // Assign the fetched data to the blog variable
        this.currentPage = 1;  // Reset to the first page when new data is loaded
        this.calculateTotalPages();  // Calculate the total number of pages based on the data
        this.heroData.path = this.router.url.slice(1);

      }, error => {
        console.error(error);
        this.spinner = false;  // Hide loading spinner on error
      }
    );
  }

// Function to get a slice of the blog data for the current page
  getPaginatedBlog(): any[] {
    this.calculateTotalPages();  // Calculate the total number of pages based on the blog data

    // Calculate the starting index of the blog data for the current page
    const startIndex: number = (this.currentPage - 1) * this.itemsPerPage;

    // Calculate the ending index of the blog data for the current page
    const endIndex = startIndex + this.itemsPerPage;

    // Return a slice of the blog data for the current page based on the calculated indices
    return this.blog.slice(startIndex, endIndex);
  }


  // Function to generate an array of page numbers
  getPageNumbers(): number[] {
    // Calculate the total number of pages based on the length of the blog data and items per page
    const totalPages = Math.ceil(this.blog.length / this.itemsPerPage);

    // Generate an array with a length equal to the total number of pages,
    // filling each element with the index + 1 to represent the page number
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }


  // Function to set the current page
  setCurrentPage(page: number): void {
    this.currentPage = page;  // Set the current page to the selected page
  }

  // Function to calculate the total number of pages
  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.blog.length / this.itemsPerPage);  // Calculate the total number of pages
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

  // Lifecycle hook called when the component is about to be destroyed
  ngOnDestroy() {
    this.destroy$.next(true);  // Notify the component destruction
    this.destroy$.complete();  // Complete the subject for component destruction
  }
}
