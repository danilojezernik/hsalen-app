import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {trace} from "../../../utils/trace";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Blog} from "../../../models/blog";

@Component({
  selector: 'app-blog-uredi',
  templateUrl: './blog-uredi.component.html',
})
export class BlogUrediComponent implements OnInit {

  blog: Blog | undefined | null;

  constructor() {
  }

  @trace()
  ngOnInit() {
  }


}
