import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-inline',
  template: `
    <p class="inline-class">
      user-list-inline works! with inline style and template
    </p>
  `,
  styles: [
    `.inline-class{color:red}`
  ]
})
export class UserListInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
