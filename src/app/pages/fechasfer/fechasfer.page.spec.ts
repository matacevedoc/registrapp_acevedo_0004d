import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FechasferPage } from './fechasfer.page';
import { IonicModule } from '@ionic/angular';

describe('FechasferPage', () => {
  let component: FechasferPage;
  let fixture: ComponentFixture<FechasferPage>;

beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    declarations: [ FechasferPage ],
    imports: [IonicModule.forRoot()]
  }).compileComponents();

    fixture = TestBed.createComponent(FechasferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
