import { Component, Input, OnInit } from "@angular/core";
import { InterServiceService } from "src/app/inter-service.service";
import { Interns } from "../common/Intern";

@Component({
    selector        : 'app-form-component',
    templateUrl     : './form-component.component.html',
    styleUrls       : ['./form-component.component.css']
})

export class FormComponent implements OnInit {
    constructor(public interServiceService: InterServiceService) { }

    ngOnInit(): void {
        this.interServiceService.getInternData().subscribe( res => {
            this.internList = res;
        });    
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

    table_header = [
        "Name",
        "Age",
        "Mobile",
        "Father's Name",
        "Mother's Name",
        "District",
        "State",
        "Nationality",
        "Pincode"
    ]

    onSaveInternData() {
        this.interServiceService.saveData(this.intern_name, this.intern_age, this.intern_mobile, this.intern_fathername, this.intern_mothername,
            this.intern_district, this.intern_state, this.intern_nationality, this.intern_pincode);
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