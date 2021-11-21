import { filter, map, switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';

  constructor(
    private updates: SwUpdate,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.updates.available.pipe(
      switchMap(() => this.snackbar.open('A new version is available!',
        'Update now').afterDismissed()),
      filter(result => result.dismissedByAction),
      map(() => this.updates.activateUpdate().then(() =>
        location.reload()))
    ).subscribe();
  }
}
