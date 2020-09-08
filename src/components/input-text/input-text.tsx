import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'input-text',
  styleUrl: 'input-text.css',
  shadow: true,
})
export class InputText {

  render() {
    return (
      <Host>
        <input class="input" type="text" />
      </Host>
    );
  }

}
