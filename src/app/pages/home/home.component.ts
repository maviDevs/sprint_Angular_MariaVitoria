import { Component, inject } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { BoasVindasComponent } from "../../components/boas-vindas/boas-vindas.component";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [MenuComponent, BoasVindasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
