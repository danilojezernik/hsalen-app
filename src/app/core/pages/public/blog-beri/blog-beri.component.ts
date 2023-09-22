import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Blog} from '../../../models/blog';

@Component({
  selector: 'app-blog-beri',
  templateUrl: './blog-beri.component.html'
})
export class BlogBeriComponent implements OnInit {

  blog: Blog | undefined | null; // Initialize with null as there's no blog data yet

  constructor() {
  }

  ngOnInit() {
  }
}
