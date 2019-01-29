import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  private id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
  }

}
