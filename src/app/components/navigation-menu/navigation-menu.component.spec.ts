import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationMenuComponent } from './navigation-menu.component';

describe('NavigationMenuOverlayComponent', () => {
  let component: NavigationMenuComponent;
  let fixture: ComponentFixture<NavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit categorySelected when the category is clicked', () => {
    const spy = spyOn(component.categorySelected, 'emit');
    const button = fixture.nativeElement.querySelector(
      '.navigation-menu-overlay__item'
    );
    button.click();
    expect(spy).toHaveBeenCalled();
  });
});
