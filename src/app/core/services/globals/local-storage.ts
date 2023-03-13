import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})

//Source: https://blog.jscrambler.com/working-with-angular-local-storage#:~:text=Save%20the%20Angular%20app%20and,encrypted%20data%20in%20local%20storage.&text=While%20trying%20to%20access%20the,can%20get%20the%20decrypted%20data.
export class LocalStorageService {
  private _key = "adaci@2022";

  constructor() {
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this._key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this._key).toString(CryptoJS.enc.Utf8);
  }

  public saveData(key: string, value: any) {
    localStorage.setItem(key, this.encrypt(JSON.stringify(value)));
  }

  public getData(key: string): any {
    let data = localStorage.getItem(key) || "";
    return JSON.parse(this.decrypt(data));
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
