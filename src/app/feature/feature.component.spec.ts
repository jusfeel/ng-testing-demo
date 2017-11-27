import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FeatureService } from '../feature.service';
import { FeatureFakeService } from '../feature-fake.service';
import { FeatureComponent } from './feature.component';

describe('FeatureComponent', () => {
  let component: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureComponent ],
      imports: [HttpModule],
      providers: [{provide: FeatureService, useClass: FeatureFakeService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render products in a table element using mock service', async(() => {
    fixture = TestBed.createComponent(FeatureComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table').textContent).toContain('Espresso');
    expect(compiled.querySelector('table').textContent).toContain('Macchiato');
    expect(compiled.querySelector('table').textContent).toContain('Americano');
  }));

});
