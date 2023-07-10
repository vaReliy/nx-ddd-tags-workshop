import { Component } from '@angular/core';
// import { UserService } from '@workshop/auth/domain-logic'; // eslint error!
import { CatalogService } from '@workshop/catalog/domain-logic';

@Component({
  selector: 'ws-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(
    private catalogService: CatalogService
  ) // private userService: UserService // we can't import this service!
  {}
}
