// Import necessary modules and components
import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medijstvo',
  templateUrl: './medijstvo.component.html'
})
export class MedijstvoComponent implements OnInit {

  medijstvo: any;

  heroData = {
    naslov: '',
    path: ''
  }

  constructor(private db: HttpClient, private router: Router) {
  }

  ngOnInit() {
    // Define the path to the JSON data file
    const path: string = 'assets/medijstvo.json'

    // Fetch data from the JSON file using HttpClient
    this.db.get(path).subscribe(response => {
      // Store the fetched data in the 'medijstvo' property
      this.medijstvo = response;

      // Populate the 'heroData' object with data from 'medijstvo'
      this.heroData.naslov = this.medijstvo.naslov
      this.heroData.path = this.router.url.slice(1);
    })
  }
}
