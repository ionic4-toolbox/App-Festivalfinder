import { Band, BandsService } from "../../services/bands.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.page.html',
  styleUrls: ['./bands.page.scss'],
})
export class BandsPage implements OnInit {

  bands: Band[];

  constructor(private festivalsService: BandsService) { }

  ngOnInit() {
    this.festivalsService.getBands().subscribe(res => {
      this.bands = res;
    })
  }

}
