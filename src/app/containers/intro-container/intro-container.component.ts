import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Resume } from '../../interfaces';
import * as fromSelectors from '../../stores/selectors';

@Component({
  selector: 'app-intro-container',
  templateUrl: './intro-container.component.html',
  styleUrls: ['./intro-container.component.scss']
})
export class IntroContainerComponent implements OnInit {

  /**
   * Holds resume.
   */
  public resume$: Observable<Resume>;

  /**
   * Constructor.
   */
  constructor(
    private store: Store<any>,
  ) { }

  /**
   * On Init.
   */
  ngOnInit() {

    this.resume$ = this.store.pipe(select(fromSelectors.selectResumeByDate));

  }

}
