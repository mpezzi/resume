import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resume-loader',
  templateUrl: './resume-loader.component.html',
  styleUrls: ['./resume-loader.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeLoaderComponent { }
