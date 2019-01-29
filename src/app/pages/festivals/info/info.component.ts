import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Festival, FestivalsService } from "../../../services/festivals.service";


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  private id: string;
  private festival: Festival = {
    name: "",
    startDate: new Date(),
    endDate: new Date(),
    id: "",
  };
  
  constructor(private route: ActivatedRoute, private festivalsService: FestivalsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    this.festivalsService.getFestival(this.id).subscribe(res => {
      this.festival = res;
    })
  }

}
