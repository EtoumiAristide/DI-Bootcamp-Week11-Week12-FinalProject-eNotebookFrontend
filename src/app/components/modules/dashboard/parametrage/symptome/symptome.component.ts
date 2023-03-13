import { Component } from '@angular/core';
import {Symptome} from "../../../../../core/models/symptome";
import {SymptomeApiService} from "../../../../../core/services/apis/symptome-api.service";
import {Router} from "@angular/router";
import {ToastService} from "../../../../../core/services/globals/toast.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-symptome',
  templateUrl: './symptome.component.html',
  styleUrls: ['./symptome.component.css']
})
export class SymptomeComponent {
  symptomeForm: Symptome;
  symptomeList: Symptome[] = [];
  symptomeListFilter!: Symptome[];

  elementsTitle = {
    validationButton: {
      save: "Valider",
      processing: "Traitement en cours...",
    },
    modalHeader: {
      save: "Ajout d'un symptome",
      update: "Modification d'un symptome",
    }
  };

  loadingBtn: boolean = false;
  textButton: string = this.elementsTitle.validationButton.save;
  txtModalHeader = this.elementsTitle.modalHeader.save;

  closeResult = '';

  constructor(
    private _symptomeService: SymptomeApiService,
    private _router: Router,
    private _toastServive: ToastService,
    private _modalService: NgbModal,
  ) {
    this.symptomeForm = new Symptome();
  }

  ngOnInit() {
    this.getAllSymptome();
  }

  getAllSymptome() {
    this._symptomeService.getAll().subscribe({
      next: response => {
        this.symptomeList = response as Symptome[];
        this.symptomeListFilter = this.symptomeList;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  save(addSymptomeForm: NgForm) {
    console.log(addSymptomeForm)
    if (addSymptomeForm.valid) {
      console.log("Data send: " + JSON.stringify(this.symptomeForm));

      //Changement de l'apparance du bouton
      this.changeFormElement();

      let apiSend: Observable<Object> = this.symptomeForm.id == 0 ? this._symptomeService.save(this.symptomeForm) : this._symptomeService.update(this.symptomeForm);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: " + response.toString());
          //const symptomeCreate: Symptome = response as Symptome;

          this._toastServive.success("Symptome enregistré avec succès", "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllSymptome();
            this.initFormElement(true);

          })
        },
        error: error => {
          console.error("There is an error !", error);
          this._toastServive.error("Une erreur est survenue", "Enregistrement échoué").onHidden.subscribe(() => {
            this.initFormElement();
          });
        }
      });
    }
  }

  changeFormElement() {
    this.loadingBtn = true;
    this.textButton = this.elementsTitle.validationButton.processing
  }

  initFormElement(isReinitData: boolean = false) {
    this.textButton = this.elementsTitle.validationButton.save
    this.loadingBtn = false;

    if (isReinitData) {
      this.symptomeForm = new Symptome();
      this._modalService.dismissAll();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(content: any, symptomeToUpdate?: Symptome) {
    console.log(symptomeToUpdate);
    if (symptomeToUpdate != undefined) {
      this.symptomeForm = symptomeToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else {
      this.symptomeForm = new Symptome();
    }

    this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true}).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  filterData(event: any) {
    let value = event.value.toLowerCase().trim();
    console.log(this.symptomeListFilter.length)
    this.symptomeList = value.length != 0 ? this.symptomeList.filter(symptome => symptome.libelle.toLowerCase().trim().includes(value)) : this.symptomeListFilter;
  }
}
