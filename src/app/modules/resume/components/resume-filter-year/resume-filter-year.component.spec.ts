import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ResumeFilterYearComponent } from './resume-filter-year.component';

describe('ResumeFilterYearComponent', () => {

  const createComponent = createComponentFactory(ResumeFilterYearComponent);
  const activeYear = new Date().getFullYear();

  let spectator: Spectator<ResumeFilterYearComponent>;

  beforeEach(() => {

    spectator = createComponent({
      props: { activeYear },
    });

  });

  it('should display years', () => {

    const changeYear = jasmine.createSpy('changeYear');

    const subscription = spectator.output('changeYear').subscribe(changeYear);

    spectator.queryAll('[data-test-id="year"]').forEach((el, i) => {
      expect(el).toHaveClass(i === 0 ? 'btn-dark' : 'btn-secondary');
      expect(el).toHaveText((activeYear - (i * 2)).toString());
      spectator.click(el);
      expect(changeYear.calls.argsFor(i)).toEqual([activeYear - (i * 2)]);
    });

    subscription.unsubscribe();

  });

});
