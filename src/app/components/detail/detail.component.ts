import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  code: string;
  constructor(private _route: ActivatedRoute) {  }

  ngOnInit() {

    //this.code = this._route.snapshot.params['id'];
    this._route.params.
         subscribe( parametres => this.code = parametres['id'] );
  }

}
