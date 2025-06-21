var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
let FilterPipe = class FilterPipe {
    /**
  
     * Pipe filters the list of elements based on the search text provided
  
     *
  
     * @param items list of elements to search in
  
     * @param searchText search string
  
     * @returns list of elements filtered by search text or []
  
     *type 1 : TitleApplicatio -- type 2 : Entreprise -- type 3 : Status;
     */
    transform(items, searchText, type) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            // * type 1 : TitleApplicatio-- type 2 : Entreprise-- type 3 : Status;
            if (type == 1) {
                console.log(type);
                return it.titleApplication.toLocaleLowerCase().includes(searchText);
            }
            if (type == 2) {
                return it.entreprise.titleEntreprise.toLocaleLowerCase().includes(searchText);
            }
            if (type == 3) {
                return it.statusApplication.toLocaleLowerCase().includes(searchText);
            }
        });
    }
};
FilterPipe = __decorate([
    Pipe({ name: 'appFilter' })
], FilterPipe);
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map