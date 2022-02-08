import { Injectable } from '@angular/core';
import { Interns } from './components/common/Intern';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterServiceService {

  constructor() { }

  internList: Interns[] = [];

  getInternData():Observable<Interns[]>{
    this.internList = [
      {
        intern_name         : "BERNOTSHA",
        intern_age          : "22",
        intern_mobile       : "8669874521",
        intern_fathername   : "ABCD",
        intern_mothername   : "EFGH",
        intern_district     : "VEL",
        intern_state        : "TN",
        intern_nationality  : "INDIAN",
        intern_pincode      : "123456"
      },
      {
        intern_name         : "SARATH",
        intern_age          : "22",
        intern_mobile       : "8669874521",
        intern_fathername   : "ABCD",
        intern_mothername   : "EFGH",
        intern_district     : "VEL",
        intern_state        : "TN",
        intern_nationality  : "INDIAN",
        intern_pincode      : "123456"
      }
    ]
    return of(this.internList).pipe(map(res => <any>res));

  }

  saveData(intern_name:string, intern_age:string, intern_mobile:string, intern_fathername:string, intern_mothername:string,
            intern_district:string, intern_state:string, intern_nationality:string, intern_pincode:string){
    let addIntern = new Interns();
    if (intern_name != "" && intern_age!="" && intern_mobile!="" && intern_fathername!="" &&
        intern_mothername!="" && intern_district!="" && intern_state!="" && intern_nationality!=""
         && intern_pincode!="") {
        addIntern.intern_name           = intern_name;
        addIntern.intern_age            = intern_age;
        addIntern.intern_mobile         = intern_mobile;
        addIntern.intern_fathername     = intern_fathername;
        addIntern.intern_mothername     = intern_mothername;
        addIntern.intern_district       = intern_district;
        addIntern.intern_state          = intern_state;
        addIntern.intern_nationality    = intern_nationality;
        addIntern.intern_pincode        = intern_pincode;
        this.internList.push(addIntern);
    }
  }
  




}
