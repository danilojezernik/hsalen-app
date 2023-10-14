import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MedijiService} from "../../../services/api/mediji.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Mediji} from "../../../models/mediji";
import {SnackBarService} from "../../../services/snack-bar/snack-bar.service";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {sharedEditorConfig} from "../../../../shared/config/editor-config";

@Component({
  selector: 'app-mediji-edit',
  templateUrl: './mediji-uredi.component.html'
})
export class MedijiUrediComponent implements OnInit {

  medijiId: any;
  mediji: any;
  blogForm: FormGroup;
  editorConfig: AngularEditorConfig = sharedEditorConfig
  spinner: boolean = false;

  constructor(
    private api: MedijiService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackbarService: SnackBarService
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
        this.mediji = data;
        this.blogForm.patchValue(data)
      },
      (error) => {
        console.error('Error getting mediji', error);
      })
  }

  onSubmit() {
    if (this.blogForm.valid) {
      const editedMediji: Mediji = this.blogForm.value;
      this.spinner = true;
      this.api.editMedijiAdmin(this.medijiId, editedMediji).subscribe(
        (data) => {
          this.spinner = false;
          this.snackbarService.showSnackbar(`Blog ${data.naslov_mediji.toUpperCase()} je bil uspešno posodobljen!`)
          // Handle successful update
          this.router.navigate(['/mediji-pregled']);  // Navigate to the desired route
        },
        (error) => {
          console.error('Error updating mediji:', error);
          this.snackbarService.showSnackbar(`Objavo v medijih ni bilo mogoče posodobiti!`)
          this.spinner = false;
        }
      );
    }
  }
}
