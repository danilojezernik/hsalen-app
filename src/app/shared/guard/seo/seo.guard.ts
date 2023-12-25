import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {SeoService} from "../../services/seo/seo.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SeoGuard implements CanActivate {

  constructor(private seo: SeoService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.seo.setPageDescription(route.data['description'])
    this.seo.setPageTitle(route.data['title'])

    return true;
  }
}
