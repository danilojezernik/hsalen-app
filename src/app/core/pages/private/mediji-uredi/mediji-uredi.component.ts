import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MedijiService} from "../../../services/api/mediji.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Mediji} from "../../../models/mediji";

@Component({
  selector: 'app-mediji-edit',
  templateUrl: './mediji-uredi.component.html'
})
export class MedijiUrediComponent implements OnInit {

  medijiId: any;
  blogForm: FormGroup;

  constructor(
    private api: MedijiService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.blogForm = this.fb.group({
      naslov_mediji: ['', Validators.required],
      opis_mediji: ['', Validators.required],
      povezava_slika: [''],
      povezava_mediji: ['']
    })
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.medijiId = params['id'];
      this.loadMediji()
    })
  }

  loadMediji() {
    this.api.getMedijiByIdAdmin(this.medijiId).subscribe((data) => {
        this.blogForm.patchValue(data)
      },
      (error) => {
        console.error('Error getting mediji', error);
      })
  }

  onSubmit() {
    if (this.blogForm.valid) {
      const editedMediji: Mediji = this.blogForm.value;
      this.api.editMedijiAdmin(this.medijiId, editedMediji).subscribe(
        () => {
          // Handle successful update
          this.router.navigate(['/mediji-pregled']);  // Navigate to the desired route
        },
        (error) => {
          console.error('Error updating mediji:', error);
        }
      );
    }
  }
}
