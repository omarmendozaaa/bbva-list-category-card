import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaListCategoryCard-styles.js';
import "@boomovie/bbva-category-card-bs/bbva-category-card-bs.js"
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-list-category-card></bbva-list-category-card>
```

##styling-doc

@customElement bbva-list-category-card
*/
export class BbvaListCategoryCard extends LitElement {
  static get is() {
    return 'bbva-list-category-card';
  }
  getData(data){
    this.categoryList = data;
  }
  // Declare properties
  static get properties() {
    return {
      categoryList: { type: Object, },
      isdetail: {type: Boolean}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.isdetail = false;
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-list-category-card-shared-styles')
    ];
  }

  // Define a template
  render() {
    return this.isdetail ?
    html`
    <ul class="list-group list-group-horizontal">
    ${this.categoryList.genres.map((category) => html`
          <bbva-category-card-bs .category=${category} .isdetail=${this.isdetail}></bbva-category-card-bs>
        `)}
    </ul>
    `: html`<div class="row row-cols-md-4 row-cols-sm-3 row-cols-1 justify-content-center">
        ${this.categoryList.genres.map((category) => html`
          <bbva-category-card-bs .category=${category} .isdetail=${this.isdetail}></bbva-category-card-bs>
        `)}
      </div>`;
  }
}
