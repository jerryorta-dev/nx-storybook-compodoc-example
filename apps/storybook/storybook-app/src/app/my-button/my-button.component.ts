import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'design-library-nx-sb-compo-butn',
    standalone: true,
    imports: [CommonModule, MatButtonModule],
    templateUrl: './my-button.component.html',
    styleUrls: ['./my-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // encapsulation: ViewEncapsulation.None,
})
export class MyButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? 'design-library-nx-sb-compo-butn--primary'
      : 'design-library-nx-sb-compo-butn--secondary';

    return ['design-library-nx-sb-compo-butn', `design-library-nx-sb-compo-butn--${this.size}`, mode];
  }

}
