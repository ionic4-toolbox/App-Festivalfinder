import { Festival, FestivalsService } from "../../services/festivals.service";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-festivals",
  templateUrl: "./festivals.page.html",
  styleUrls: ["./festivals.page.scss"],
})
export class FestivalsPage implements OnInit {

  festivals: Festival[];

  constructor(private festivalsService: FestivalsService) { }

  ngOnInit() {
    this.festivalsService.getFestivals().subscribe(res => {
      this.festivals = res;
    })
  }
}
