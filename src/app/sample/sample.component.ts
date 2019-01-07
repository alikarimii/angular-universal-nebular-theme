import { Component } from "@angular/core";

@Component({
    template: `
  
      <nb-layout>
        <nb-layout-header fixed>Company Name</nb-layout-header>
  
        <nb-sidebar>Sidebar Content</nb-sidebar>
  
        <nb-layout-column>Page Content</nb-layout-column>
      </nb-layout>
    `
  })
  export class SomePageComponent {}
