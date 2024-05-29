import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent, AccordionItem } from './accordion.component';
import { By } from '@angular/platform-browser';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle item on click', () => {
    const items: AccordionItem[] = [
      { title: 'Item 1', content: 'Content 1' },
      { title: 'Item 2', content: 'Content 2' }
    ];
    component.items = items;
    fixture.detectChanges();

    const header = fixture.debugElement.query(By.css('.card:first-child .card-header'));
    header.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.activeIndex).toBe(0); 

    header.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.activeIndex).toBe(-1); 
  });
});
