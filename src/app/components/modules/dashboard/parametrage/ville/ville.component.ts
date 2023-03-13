import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ToastService} from "../../../../../core/services/globals/toast.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm, NgModel} from "@angular/forms";
import {Observable} from "rxjs";
import {Ville} from "../../../../../core/models/ville";
import {VilleApiService} from "../../../../../core/services/apis/ville-api.service";
import {PaysApiService} from "../../../../../core/services/apis/pays-api.service";
import {Pays} from "../../../../../core/models/pays";

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent {
  villeForm: Ville;
  villeList: Ville[] = [];
  paysList: Pays[] = [];
  villeListFilter!: Ville[];

  elementsTitle = {
    validationButton: {
      save: "Valider",
      processing: "Traitement en cours...",
    },
    modalHeader: {
      save: "Ajout d'une ville",
      update: "Modification d'une ville",
    }
  };

  loadingBtn: boolean = false;
  textButton: string = this.elementsTitle.validationButton.save;
  txtModalHeader = this.elementsTitle.modalHeader.save;

  closeResult = '';

  constructor(
    private _villeService: VilleApiService,
    private _paysService: PaysApiService,
    private _router: Router,
    private _toastServive: ToastService,
    public _modalService: NgbModal,
  ) {
    this.villeForm = new Ville();
  }

  ngOnInit() {
    this.getAllPays();
  }

  getAllPays() {
    this._paysService.getAll().subscribe({
      next: response => {
        this.paysList = response as Pays[];

        this.getAllVille();
      },
      error: error => {
        console.log(error);
      }
    })
  }

  getAllVille() {
    this._villeService.getAll().subscribe({
      next: response => {
        //console.log(response);
        this.villeList = response as Ville[];
        //Recuperation des pays de chaque ville sous forme d'objets
        this.villeList.forEach(ville => {
          let paysVille: number = ville.pays as unknown as number
          this.paysList.forEach(pays => {
            if (pays.id == paysVille) {
              ville.pays = pays;
            }
          })
        })
        //console.log(this.villeList)
        this.villeListFilter = this.villeList;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  save(addVilleForm: NgForm) {
    console.log(addVilleForm)
    if (addVilleForm.valid) {
      this.villeForm.pays = JSON.parse(this.villeForm.pays as unknown as string) as Pays
      console.log("Data send: " + JSON.stringify(this.villeForm));

      //Changement de l'apparance du bouton
      this.changeFormElement();

      let apiSend: Observable<Object> = this.villeForm.id == 0 ? this._villeService.save(this.villeForm) : this._villeService.update(this.villeForm);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: " + response.toString());
          //const villeCreate: Ville = response as Ville;

          this._toastServive.success("Ville enregistré avec succès", "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllVille();
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
      this.villeForm = new Ville();
      this._modalService.dismissAll();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(content: any, villeToUpdate?: Ville) {
    //console.log(villeToUpdate);
    if (villeToUpdate != undefined) {
      this.villeForm = villeToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else {
      //console.log(this.villeForm);
      this.villeForm = new Ville();
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
    this.villeList = value.length != 0 ? this.villeList.filter(ville => ville.nom.toLowerCase().trim().includes(value)) : this.villeListFilter;
  }

  change(selectInput: NgModel) {
    //console.log(selectInput.control.value);
  }

  controlSelectionPays(selectInput: NgModel): boolean {
    let data: any;
    try {
      data = selectInput.control.value != undefined ? JSON.parse(selectInput.control.value) : undefined;
    } catch (e) {
      data = undefined
    }
    //console.log(data);
    return data == undefined;
  }
}
