import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayComponent } from './overlay.component';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the overlay hidden by default', () => {
    const overlay = fixture.nativeElement.querySelector('.overlay');
    expect(overlay.classList).not.toContain('overlay--visible');
  });

  it('should display the overlay when isOpen is true', () => {
    fixture.componentRef.setInput('isOpen', true);
    fixture.detectChanges();
    const overlay = fixture.nativeElement.querySelector('.overlay');
    expect(overlay.classList).toContain('overlay--visible');
  });

  it('should hidden the overlay when isOpen is false', () => {
    fixture.componentRef.setInput('isOpen', false);
    fixture.detectChanges();
    const overlay = fixture.nativeElement.querySelector('.overlay');
    expect(overlay.classList).toContain('overlay--hidden');
  });

  it('should emit closed when close in called', () => {
    const spy = spyOn(component.closed, 'emit');
    component.close();
    expect(spy).toHaveBeenCalled();
  });

  it('should have the overlay left by default', () => {
    const overlay = fixture.nativeElement.querySelector('.overlay');
    expect(overlay.classList).toContain('overlay--left');
  });

  it('should be positioned on the left when position is left', () => {
    fixture.componentRef.setInput('position', 'left');
    fixture.detectChanges();
    const overlay = fixture.nativeElement.querySelector('.overlay');
    expect(overlay.classList).toContain('overlay--left');
  });

  it('should be positioned on the right when position is right', () => {
    fixture.componentRef.setInput('position', 'right');
    fixture.detectChanges();
    const overlay = fixture.nativeElement.querySelector('.overlay');
    expect(overlay.classList).toContain('overlay--right');
  });
});
