import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'date-picker',
  styleUrl: 'date-picker.css',
  shadow: true,
})
export class DatePicker {
  @State() open: boolean

  onClick() {
    this.open = !this.open
  }

  render() {
    return (
      <Host>
        <button type="button" onClick={() => this.onClick()}>
          Clique aqui
        </button>
        <input type="text" disabled value={this.open ? 'tá abrido' : 'não tá abrido'} />
        <slot></slot>
      </Host>
    );
  }

}
