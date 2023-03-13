import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ToastService} from "../../../../../core/services/globals/toast.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {TypeEtablissement} from "../../../../../core/models/type-etablissement";
import {TypeEtablissementApiService} from "../../../../../core/services/apis/type-etablissement-api.service";

@Component({
  selector: 'app-type-etablissement',
  templateUrl: './type-etablissement.component.html',
  styleUrls: ['./type-etablissement.component.css']
})
export class TypeEtablissementComponent {
  typeEtablissementForm: TypeEtablissement;
  typeEtablissementList: TypeEtablissement[] = [];
  typeEtablissementListFilter!: TypeEtablissement[];

  elementsTitle = {
    validationButton: {
      save: "Valider",
      processing: "Traitement en cours...",
    },
    modalHeader: {
      save: "Ajout d'un Type Etablissement",
      update: "Modification d'un Type Etablissement",
    }
  };

  loadingBtn: boolean = false;
  textButton: string = this.elementsTitle.validationButton.save;
  txtModalHeader = this.elementsTitle.modalHeader.save;

  closeResult = '';

  constructor(
    private _typeEtablissementService: TypeEtablissementApiService,
    private _router: Router,
    private _toastServive: ToastService,
    private _modalService: NgbModal,
  ) {
    this.typeEtablissementForm = new TypeEtablissement();
  }

  ngOnInit() {
    this.getAllTypeEtablissement();
  }

  getAllTypeEtablissement() {
    this._typeEtablissementService.getAll().subscribe({
      next: response => {
        this.typeEtablissementList = response as TypeEtablissement[];
        this.typeEtablissementListFilter = this.typeEtablissementList;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  save(addTypeEtablissementForm: NgForm) {
    console.log(addTypeEtablissementForm)
    if (addTypeEtablissementForm.valid) {
      console.log("Data send: " + JSON.stringify(this.typeEtablissementForm));

      //Changement de l'apparance du bouton
      this.changeFormElement();

      let apiSend: Observable<Object> = this.typeEtablissementForm.id == 0 ? this._typeEtablissementService.save(this.typeEtablissementForm) : this._typeEtablissementService.update(this.typeEtablissementForm);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: " + response.toString());
          //const typeEtablissementCreate: TypeEtablissement = response as TypeEtablissement;

          this._toastServive.success("TypeEtablissement enregistré avec succès", "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllTypeEtablissement();
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
      this.typeEtablissementForm = new TypeEtablissement();
      this._modalService.dismissAll();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(content: any, typeEtablissementToUpdate?: TypeEtablissement) {
    console.log(typeEtablissementToUpdate);
    if (typeEtablissementToUpdate != undefined) {
      this.typeEtablissementForm = typeEtablissementToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else {
      this.typeEtablissementForm = new TypeEtablissement();
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
    console.log(this.typeEtablissementListFilter.length)
    this.typeEtablissementList = value.length != 0 ? this.typeEtablissementList.filter(typeEtablissement => typeEtablissement.libelle.toLowerCase().trim().includes(value)) : this.typeEtablissementListFilter;
  }
}
