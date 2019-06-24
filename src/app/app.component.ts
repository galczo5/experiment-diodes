import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// Old way commented

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  timeoutDiodeColor: string = 'gray';
  intervalDiodeColor: string = 'Tomato';

  // intervalRef: number;
  // timeoutRefs: Array<number> = [];

  private onDestroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {

    // this.intervalRef = setInterval(() => {
    //   this.intervalDiodeColor = this.getColor(this.intervalDiodeColor)
    // }, 1000);

    interval(1000)
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => {
        this.intervalDiodeColor = this.getColor(this.intervalDiodeColor);
      });

  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();

    // this.intervalRef && clearInterval(this.intervalRef);
    // this.timeoutRefs.forEach(clearTimeout);
  }

  activate() {

    // this.timeoutRefs.push(
    //   setTimeout(() => {
    //     this.timeoutDiodeColor = this.getColor(this.timeoutDiodeColor);
    //   }, 100)
    // );

    timer(1000)
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => {
        this.timeoutDiodeColor = this.getAlternateColor(this.timeoutDiodeColor);
      });
  }

  private getColor(actual: string): string {
    return actual === 'Tomato' ? 'YellowGreen' : 'Tomato';
  }

  private getAlternateColor(actual: string): string {
    return actual === 'gray' ? 'SkyBlue' : 'gray';
  }
}
