import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesComponent } from './entreprises.component';

describe('EntreprisesComponent', () => {
    let component: EntreprisesComponent;
    let fixture: ComponentFixture<EntreprisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ EntreprisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(EntreprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Entreprises');
  }));
 
});
