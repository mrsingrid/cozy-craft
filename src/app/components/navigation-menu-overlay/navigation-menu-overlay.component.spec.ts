import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationMenuOverlayComponent } from './navigation-menu-overlay.component';

describe('NavigationMenuOverlayComponent', () => {
  let component: NavigationMenuOverlayComponent;
  let fixture: ComponentFixture<NavigationMenuOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationMenuOverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationMenuOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the overlay hidden by default', () => {
    const overlay = fixture.nativeElement.querySelector(
      '.navigation-menu-overlay'
    );
    expect(overlay.classList).not.toContain('navigation-menu-overlay--visible');
  });

  it('should display the overlay when isMenuOpen is true', () => {
    fixture.componentRef.setInput('isMenuOpen', true);
    fixture.detectChanges();
    const overlay = fixture.nativeElement.querySelector(
      '.navigation-menu-overlay'
    );
    expect(overlay.classList).toContain('navigation-menu-overlay--visible');
  });

  it('should hidden the overlay when isMenuOpen is false', () => {
    fixture.componentRef.setInput('isMenuOpen', false);
    fixture.detectChanges();
    const overlay = fixture.nativeElement.querySelector(
      '.navigation-menu-overlay'
    );
    expect(overlay.classList).toContain('navigation-menu-overlay--hidden');
  });

  it('should emit menuClosed when menuClose in called', () => {
    const spy = spyOn(component.menuClosed, 'emit');
    component.closeMenu();
    expect(spy).toHaveBeenCalled();
  });
});
