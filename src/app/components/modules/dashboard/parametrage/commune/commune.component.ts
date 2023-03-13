import {Component} from '@angular/core';
import {Commune} from "../../../../../core/models/commune";
import {Ville} from "../../../../../core/models/ville";
import {CommuneApiService} from "../../../../../core/services/apis/commune-api.service";
import {VilleApiService} from "../../../../../core/services/apis/ville-api.service";
import {Router} from "@angular/router";
import {ToastService} from "../../../../../core/services/globals/toast.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm, NgModel} from "@angular/forms";
import {Observable} from "rxjs";
import {CommuneData} from "../../../../../core/payloads/commune-data";
import {VilleData} from "../../../../../core/payloads/ville-data";

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent {
  communeForm: Commune;
  communeList: Commune[] = [];
  villeList: Ville[] = [];
  communeListFilter!: Commune[];

  elementsTitle = {
    validationButton: {
      save: "Valider",
      processing: "Traitement en cours...",
    },
    modalHeader: {
      save: "Ajout d'une commune",
      update: "Modification d'une commune",
    }
  };

  loadingBtn: boolean = false;
  textButton: string = this.elementsTitle.validationButton.save;
  txtModalHeader = this.elementsTitle.modalHeader.save;

  closeResult = '';

  constructor(
    private _communeService: CommuneApiService,
    private _villeService: VilleApiService,
    private _router: Router,
    private _toastServive: ToastService,
    public _modalService: NgbModal,
  ) {
    this.communeForm = new Commune();
  }

  ngOnInit() {
    this.getAllVille();
  }

  getAllVille() {
    this._villeService.getAll().subscribe({
      next: response => {
        this.villeList = response as Ville[];

        this.getAllCommune();
      },
      error: error => {
        console.log(error);
      }
    })
  }

  getAllCommune() {
    this._communeService.getAll().subscribe({
      next: response => {
        //console.log(response);
        this.communeList = response as Commune[];
        //Recuperation des ville de chaque commune sous forme d'objets
        this.communeList.forEach(commune => {
          let villeCommune: number = commune.ville as unknown as number
          this.villeList.forEach(ville => {
            if (ville.id == villeCommune) {
              commune.ville = ville;
            }
          })
        })
        //console.log(this.communeList)
        this.communeListFilter = this.communeList;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  save(addCommuneForm: NgForm) {
    console.log(addCommuneForm)
    if (addCommuneForm.valid) {
      this.communeForm.ville = JSON.parse(this.communeForm.ville as unknown as string) as Ville
      let communeData: CommuneData = new CommuneData(
        this.communeForm.id,
        this.communeForm.nom,
        new VilleData(
          this.communeForm.ville.id,
          this.communeForm.ville.nom
        )
      )
      console.log("Data send: " + JSON.stringify(communeData));

      //Changement de l'apparance du bouton
      this.changeFormElement();

      let apiSend: Observable<Object> = this.communeForm.id == 0 ? this._communeService.save(communeData) : this._communeService.update(communeData);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: " + response.toString());
          //const communeCreate: Commune = response as Commune;

          this._toastServive.success("Commune enregistrée avec succès", "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllCommune();
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
      this.communeForm = new Commune();
      this._modalService.dismissAll();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(content: any, communeToUpdate?: Commune) {
    //console.log(communeToUpdate);
    if (communeToUpdate != undefined) {
      this.communeForm = communeToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else {
      //console.log(this.communeForm);
      this.communeForm = new Commune();
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
    this.communeList = value.length != 0 ? this.communeList.filter(commune => commune.nom.toLowerCase().trim().includes(value)) : this.communeListFilter;
  }

  change(selectInput: NgModel) {
    //console.log(selectInput.control.value);
  }

  controlSelectionVille(selectInput: NgModel): boolean {
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
