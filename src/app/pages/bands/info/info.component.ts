import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Band, BandsService } from "../../../services/bands.service";


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  private id: string;
  private band: Band = {
    name: "",
    id: "",
  };
  
  constructor(private route: ActivatedRoute, private bandsService: BandsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.bandsService.getBand(this.id).subscribe(res => {
      this.band = res;
    })
  }

}
