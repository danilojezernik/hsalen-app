import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MedijiService} from "../../../services/api/mediji.service";
import {MatDialog} from "@angular/material/dialog";
import {DataUpdateService} from "../../../services/communication/data-update.service";
import {Mediji} from "../../../models/mediji";
import {sharedEditorConfig} from "../../../../shared/config/editor-config";
import {AngularEditorConfig} from "@kolkov/angular-editor";

@Component({
    selector: 'app-mediji-dodaj',
    templateUrl: './mediji-dodaj.component.html'
})
export class MedijiDodajComponent implements OnInit {

    mediji: any;
    addingMedijiForm: FormGroup = new FormGroup({})
    editorConfig: AngularEditorConfig = sharedEditorConfig

    constructor(
        private api: MedijiService,
        public dialog: MatDialog,
        public fb: FormBuilder,
        private dataUpdateService: DataUpdateService
    ) {
    }

    ngOnInit() {
        this.addingMedijiForm = this.fb.group({
            naslov_mediji: ['', Validators.required],
            opis_mediji: ['', Validators.required],
            povezava_slika: [''],
            povezava_mediji: ['']
        })
    }

    addMediji() {

        // Extract form values
        const formValues = this.addingMedijiForm.value

        const newMediji: Mediji = {
            naslov_mediji: formValues.naslov_mediji,
            opis_mediji: formValues.opis_mediji,
            povezava_slika: formValues.povezava_slika,
            povezava_mediji: formValues.povezava_mediji,
            datum_vnosa: new Date().toISOString()
        }

        // Call the MedijiService to add new mediji
        this.api.addNewMedijiAdmin(newMediji).subscribe((data) => {
                console.log(data)
                this.mediji = this.api.getAllMedijiAdmin()
                this.addingMedijiForm.reset()
                this.dialog.closeAll()
                this.dataUpdateService.triggerDataUpdate();
            },
            (error) => {
                console.error('Error adding mediji:', error);
            })

    }

    protected readonly sharedEditorConfig = sharedEditorConfig;
}
