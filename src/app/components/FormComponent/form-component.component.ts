import { Component, Input, OnInit } from "@angular/core";
import { Interns } from "../common/Intern";

@Component({
    selector        : 'app-form-component',
    templateUrl     : './form-component.component.html',
    styleUrls       : ['./form-component.component.css']
})

export class FormComponent implements OnInit {
    constructor() { }
    ngOnInit(): void {

    }
    intern_name         : string = "";
    intern_age          : string = "";
    intern_mobile       : string = "";
    intern_fathername   : string = "";
    intern_mothername   : string = "";
    intern_district     : string = "";
    intern_state        : string = "";
    intern_nationality  : string = "";
    intern_pincode      : string = "";

    internList: Interns[] = [];

    internKeys: any = this.internList.keys;

    onSaveInternData() {
        let addIntern = new Interns();
        if (this.intern_name != "" && this.intern_age!="" && this.intern_mobile!="" && this.intern_fathername!="" &&
            this.intern_mothername!="" && this.intern_district!="" && this.intern_state!="" && this.intern_nationality!=""
             && this.intern_pincode!="") {
            addIntern.intern_name           = this.intern_name;
            addIntern.intern_age            = this.intern_age;
            addIntern.intern_mobile         = this.intern_mobile;
            addIntern.intern_fathername     = this.intern_fathername;
            addIntern.intern_mothername     = this.intern_mothername;
            addIntern.intern_district       = this.intern_district;
            addIntern.intern_state          = this.intern_state;
            addIntern.intern_nationality    = this.intern_nationality;
            addIntern.intern_pincode        = this.intern_pincode;
            this.internList.push(addIntern);
        }
    }
    onClearInternData() {
        this.intern_name        = "";
        this.intern_age         = "";
        this.intern_mobile      = "";
        this.intern_fathername  = "";
        this.intern_mothername  = "";
        this.intern_district    = "";
        this.intern_nationality = "";
        this.intern_pincode     = "";
        this.intern_state       = "";
    }
} 