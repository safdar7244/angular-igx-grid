import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  Inject,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { athletesData } from './data/athletesData';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public data: any = athletesData;
  ngOnInit() {}
}

export class Data {
  public ID: number;
  public Name: string;
}
