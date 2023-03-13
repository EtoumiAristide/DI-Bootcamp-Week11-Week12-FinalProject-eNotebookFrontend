import {Component} from '@angular/core';
import {Specialite} from "../../../../../core/models/specialite";
import {SpecialiteApiService} from "../../../../../core/services/apis/specialite-api.service";
import {Router} from "@angular/router";
import {ToastService} from "../../../../../core/services/globals/toast.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent {
  specialiteForm: Specialite;
  specialiteList: Specialite[] = [];
  specialiteListFilter!: Specialite[];

  colorIcon = [
    "#00235B", "#DF7857", "#DF2E38", "#FF0303", "#E384FF",
    "#7DB9B6", "#AD7BE9", "#EA8FEA", "#AA5656", "#CD5888",
    "#D61355", "#00425A", "#1F8A70", "#588FB9", "#820000",
  ]

  elementsTitle = {
    validationButton: {
      save: "Valider",
      processing: "Traitement en cours...",
    },
    modalHeader: {
      save: "Ajout d'une specialite",
      update: "Modification d'une specialite",
    }
  };

  loadingBtn: boolean = false;
  textButton: string = this.elementsTitle.validationButton.save;
  txtModalHeader = this.elementsTitle.modalHeader.save;

  closeResult = '';

  constructor(
    private _specialiteService: SpecialiteApiService,
    private _router: Router,
    private _toastServive: ToastService,
    private _modalService: NgbModal,
  ) {
    this.specialiteForm = new Specialite();
  }

  ngOnInit() {
    this.getAllSpecialite();
  }

  getAllSpecialite() {
    this._specialiteService.getAll().subscribe({
      next: response => {
        this.specialiteList = response as Specialite[];
        this.specialiteListFilter = this.specialiteList;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  save(addSpecialiteForm: NgForm) {
    console.log(addSpecialiteForm)
    if (addSpecialiteForm.valid) {
      console.log("Data send: " + JSON.stringify(this.specialiteForm));

      //Changement de l'apparance du bouton
      this.changeFormElement();

      let apiSend: Observable<Object> = this.specialiteForm.id == 0 ? this._specialiteService.save(this.specialiteForm) : this._specialiteService.update(this.specialiteForm);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: " + response.toString());
          //const specialiteCreate: Specialite = response as Specialite;

          this._toastServive.success("Specialite enregistré avec succès", "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllSpecialite();
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
      this.specialiteForm = new Specialite();
      this._modalService.dismissAll();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(content: any, specialiteToUpdate?: Specialite) {
    console.log(specialiteToUpdate);
    if (specialiteToUpdate != undefined) {
      this.specialiteForm = specialiteToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else {
      this.specialiteForm = new Specialite();
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
    console.log(this.specialiteListFilter.length)
    this.specialiteList = value.length != 0 ? this.specialiteList.filter(specialite => specialite.libelle.toLowerCase().trim().includes(value)) : this.specialiteListFilter;
  }

  randomColorPick(): any {
    //console.log(Math.floor((Math.random() * this.colorIcon.length)) + 1)
    return this.colorIcon[Math.floor((Math.random() * this.colorIcon.length)) + 1];
  }
}
