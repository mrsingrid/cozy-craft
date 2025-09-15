import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit chooseProducts when the button "Choose products" is clicked', () => {
    const spy = spyOn(component.chooseProducts, 'emit');
    const button = fixture.nativeElement.querySelector('.cart__button');
    button.click();
    expect(spy).toHaveBeenCalled();
  });
});
