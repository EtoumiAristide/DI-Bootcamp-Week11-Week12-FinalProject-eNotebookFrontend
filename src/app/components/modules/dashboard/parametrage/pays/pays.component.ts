import {Component} from '@angular/core';
import {PaysApiService} from "../../../../../core/services/apis/pays-api.service";
import {Pays} from "../../../../../core/models/pays";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ToastService} from "../../../../../core/services/globals/toast.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent {

  paysForm: Pays;
  paysList: Pays[] = [];
  paysListFilter!: Pays[];

  elementsTitle = {
    validationButton: {
      save: "Valider",
      processing: "Traitement en cours...",
    },
    modalHeader: {
      save: "Ajout d'un pays",
      update: "Modification d'un pays",
    }
  };

  loadingBtn: boolean = false;
  textButton: string = this.elementsTitle.validationButton.save;
  txtModalHeader = this.elementsTitle.modalHeader.save;

  closeResult = '';

  constructor(
    private _paysService: PaysApiService,
    private _router: Router,
    private _toastServive: ToastService,
    private _modalService: NgbModal,
  ) {
    this.paysForm = new Pays();
  }

  ngOnInit() {
    this.getAllPays();
  }

  getAllPays() {
    this._paysService.getAll().subscribe({
      next: response => {
        this.paysList = response as Pays[];
        this.paysListFilter = this.paysList;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  save(addPaysForm: NgForm) {
    console.log(addPaysForm)
    if (addPaysForm.valid) {
      console.log("Data send: " + JSON.stringify(this.paysForm));

      //Changement de l'apparance du bouton
      this.changeFormElement();

      let apiSend: Observable<Object> = this.paysForm.id == 0 ? this._paysService.save(this.paysForm) : this._paysService.update(this.paysForm);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: " + response.toString());
          //const paysCreate: Pays = response as Pays;

          this._toastServive.success("Pays enregistré avec succès", "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllPays();
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
      this.paysForm = new Pays();
      this._modalService.dismissAll();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(content: any, paysToUpdate?: Pays) {
    console.log(paysToUpdate);
    if (paysToUpdate != undefined) {
      this.paysForm = paysToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else {
      this.paysForm = new Pays();
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
    console.log(this.paysListFilter.length)
    this.paysList = value.length != 0 ? this.paysList.filter(pays => pays.nom.toLowerCase().trim().includes(value)) : this.paysListFilter;
  }
}
