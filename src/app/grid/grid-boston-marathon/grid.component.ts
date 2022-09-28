import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  Inject,
  ElementRef,
  AfterViewInit,
  Input,
} from '@angular/core';
import {
  IgxGridComponent,
  IgxNumberSummaryOperand,
  IgxStringFilteringOperand,
  IgxSummaryResult,
  CellType,
  OverlaySettings,
  IgxOverlayService,
  AbsolutePosition,
  OverlayClosingEventArgs,
} from 'igniteui-angular';
import { athletesData } from '../../data/athletesData';

@Component({
  selector: 'app-grid',
  styleUrls: ['./grid.component.scss'],
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
  @Input() public data: any[];

  public temp: any[];

  public finishedAlert: ElementRef;

  ngOnInit() {
    this.temp = this.data;
    console.log('abc', this.data);
  }
}





// @ViewChild('grid1', { read: IgxGridComponent, static: true })
  // public grid1: IgxGridComponent;

  // @ViewChild('winnerAlert', { static: true })
  // public winnerAlert: ElementRef;

  // @ViewChild('finishedAlert', { static: true })
class CustomTopSpeedSummary {
  public operate(data?: any[]): IgxSummaryResult[] {
    const result = [];
    result.push({
      key: 'max',
      label: 'max',
      summaryResult: data.length
        ? IgxNumberSummaryOperand.max(data).toFixed(0)
        : null,
    });

    return result;
  }
}

export class CustomBPMSummary {
  public operate(data?: any[]): IgxSummaryResult[] {
    const result = [];
    result.push({
      key: 'average',
      label: 'average',
      summaryResult: data.length
        ? IgxNumberSummaryOperand.average(data).toFixed(2)
        : null,
    });

    return result;
  }
}

export class CustomSpeedSummary {
  public operate(data?: any[]): IgxSummaryResult[] {
    data = data
      .reduce((acc, val) => acc.concat(val), [])
      .map((rec) => rec.Speed);
    const result = [];
    result.push({
      key: 'average',
      label: 'average',
      summaryResult: data.length
        ? IgxNumberSummaryOperand.average(data).toFixed(2)
        : null,
    });

    return result;
  }
}
