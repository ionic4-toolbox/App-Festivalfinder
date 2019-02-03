import { Band, BandsService } from "../../services/bands.service";
import { User, UserService } from "../../services/user.service";
import { AuthService } from "../../services/auth.service";
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bands',
  templateUrl: './bands.page.html',
  styleUrls: ['./bands.page.scss'],
})
export class BandsPage implements OnInit {

  bands: Band[];
  userName: string;

  constructor(private bandsService: BandsService,
    private userService: UserService,
    private authService: AuthService) {
    if (authService.getCurrentUser())
      this.userService.user.subscribe(data => {
        this.userName = data.firstName + " " + data.lastName;
      });
    else {
      this.userName = "Anonymous"
    }
  }

  ngOnInit() {
    this.bandsService.getBands().subscribe(res => {
      this.bands = res;
    })
  }

}
