import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resume-menu',
  templateUrl: './resume-menu.component.html',
  styleUrls: ['./resume-menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeMenuComponent { }
