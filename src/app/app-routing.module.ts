import {NgModule} from '@angular/core';
import {NavigationEnd, Router, RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./core/pages/public/index/index.component";
import {BlogComponent} from "./core/pages/public/blog/blog.component";
import {BlogAddComponent} from "./core/pages/private/blog/blog-add/blog-add.component";
import {LoginComponent} from "./core/pages/public/login/login.component";
import {AdminComponent} from "./core/pages/private/admin/admin.component";
import {BlogPregledComponent} from "./core/pages/private/blog/blog-pregled/blog-pregled.component";
import {BlogBeriComponent} from "./core/pages/public/blog-beri/blog-beri.component";
import {BlogUrediComponent} from "./core/pages/private/blog/blog-uredi/blog-uredi.component";
import {HipnoterapijaComponent} from "./core/pages/public/hipnoterapija/hipnoterapija.component";
import {SamohipnozaComponent} from "./core/pages/public/samohipnoza/samohipnoza.component";
import {RegresijaComponent} from "./core/pages/public/regresija/regresija.component";
import {NotFoundComponent} from "./core/pages/public/not-found/not-found.component";
import {AuthGuardService} from "./core/services/auth/auth-guard.service";
import {OmeniComponent} from "./core/pages/public/omeni/omeni.component";
import {MedijiPregledComponent} from "./core/pages/private/mediji/mediji-pregled/mediji-pregled.component";
import {MedijiUrediComponent} from "./core/pages/private/mediji/mediji-uredi/mediji-uredi.component";
import {MedijiBeriComponent} from "./core/pages/private/mediji/mediji-beri/mediji-beri.component";
import {ContactComponent} from "./core/pages/public/contact/contact.component";
import {EmailPregledComponent} from "./core/pages/private/email-pregled/email-pregled.component";
import {GetIdComponent} from "./shared/components/dialog/get-id.component";
import {JasnovidnostComponent} from "./core/pages/public/jasnovidnost/jasnovidnost.component";
import {MedijstvoComponent} from "./core/pages/public/medijstvo/medijstvo.component";
import {EventsComponent} from "./core/pages/public/events/events.component";
import {EventsPregledComponent} from "./core/pages/private/events/events-pregled/events-pregled.component";
import {EventsAddComponent} from "./core/pages/private/events/events-add/events-add.component";
import {EventsUrediComponent} from "./core/pages/private/events/events-uredi/events-uredi.component";
import {
  SubscribersPregledComponent
} from "./core/pages/private/subscribers/subscribers-pregled/subscribers-pregled.component";
import {SubscribersEditComponent} from "./core/pages/private/subscribers/subscribers-edit/subscribers-edit.component";
import {
  NewsletterPregledComponent
} from "./core/pages/private/newsletter/newsletter-pregled/newsletter-pregled.component";
import {SuccessComponent} from "./core/pages/public/success/success.component";
import {ReviewPregledComponent} from "./core/pages/private/review/review-pregled/review-pregled.component";
import {GalleryComponent} from "./core/pages/public/gallery/gallery.component";
import {SeoGuard} from "./shared/guard/seo/seo.guard";

// Function to handle loadChildren logic for CoreModule
const coreModuleLoader = () => import('./core/core.module').then(m => m.CoreModule);

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen | Hipnoterapija | Samohipnoza | Jasnovidnost | Medijstvo',
      description: 'V Hipnoterapevtskem studiu Alen smo specializirani za zagotavljanje transformativnih hipnoterapevtskih izkušenj. Izkoristite moč svoje podzavesti in dosežite svoje osebne cilje z našimi prilagojenimi sejami hipnoterapije.'
    }
  },
  {
    path: 'blog',
    component: BlogComponent,
    loadChildren: coreModuleLoader,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen - Blog',
      description: 'Dobrodošli na mojem spletnem dnevniku, kjer nudim negovalni prostor za vašo pot osebne rasti. Poglobite se v pronicljive članke o hipnoterapiji, meditaciji, medijstvu in še več ter odkrijte zmogljiva orodja za navdih za preobrazbo na vseh področjih svojega življenja. Naredite prvi korak k notranjemu zdravljenju in samoodkrivanju ter se skupaj z mano podajte na pot samopreobrazbe.'
    }
  },
  {
    path: 'blog/:id',
    component: BlogBeriComponent,
    title: 'Hypnosis studio Alen - Blog objava',
    loadChildren: coreModuleLoader
  },
  {
    path: 'blog/edit/:id',
    component: BlogUrediComponent,
    title: 'Hypnosis studio Alen - Uredi objavo',
    canActivate: [AuthGuardService]
  },
  {
    path: 'blog-pregled',
    component: BlogPregledComponent,
    title: 'Hypnosis studio Alen - Pregled objav',
    loadChildren: coreModuleLoader,
    canActivate: [AuthGuardService]
  },
  {
    path: 'blog-dodaj',
    component: BlogAddComponent,
    title: 'Hypnosis studio Alen - Dodaj nov blog',
    canActivate: [AuthGuardService]
  },
  {
    path: 'mediji-pregled',
    component: MedijiPregledComponent,
    title: 'Hypnosis studio Alen - Dodaj nov medij',
    canActivate: [AuthGuardService]
  },
  {
    path: 'mediji/edit/:id',
    component: MedijiUrediComponent,
    title: 'Hypnosis studio Alen - Uredi medij',
    canActivate: [AuthGuardService]
  },
  {
    path: 'mediji/:id',
    component: MedijiBeriComponent,
    title: 'Hypnosis studio Alen - Mediji objava',
    loadChildren: coreModuleLoader,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Hypnosis studio Alen - Prijava'
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Hypnosis studio Alen - Admin',
    canActivate: [AuthGuardService]
  },
  {
    path: 'hipnoterapija',
    component: HipnoterapijaComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen - Hipnoterapija',
      description: 'S pomočjo hipnoze oziroma hipnoterapije lahko izboljšate svojo kvaliteto življenja na vseh področjih in tako stopite na pravo življenjsko pot, brez strahov, zadržkov in negativnih prepričanj. S pomočjo jasnovidnosti pa lahko na malo drugačen način dobite odgovor na to, katera pot je za vas prava pot in katera neprava.'
    }
  },
  {
    path: 'samohipnoza',
    component: SamohipnozaComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen - Samohipnoza',
      description: 'Naučite se sami dosegati globoko hipnotično stanje brez napora!'
    }
  },
  {
    path: 'regresija',
    component: RegresijaComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen - Regresija',
      description: 'Radovednost ni nikoli odveč, je prijetna in zanimiva!'
    }
  },
  {
    path: 'jasnovidnost',
    component: JasnovidnostComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen - Jasnovidnost',
      description: 'Samo prava resnica osvobodi človeka in pokaže pravo pot.'
    }
  },
  {
    path: 'medijstvo',
    component: MedijstvoComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen - Medijstvo',
      description: 'Prosta povezava z našimi preminulimi in našimi vodniki ter ostalim dušam.'
    }
  },
  {
    path: 'o-meni',
    component: OmeniComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen - O meni',
      description: 'Človeška psihologija me je že od nekdaj navduševala in leta 2015 sem zaključila izobraževanje v Omni Hypnosis Training Center Slovenija, mednarodno priznani šoli za hipnoterapevte. V zadnjih 7ih letih sem izvedla preko 3000 terapij pri nas in v tujini.'
    }
  },
  {
    path: 'kontakt',
    component: ContactComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen - Kontakt',
      description: 'Hvala za vaše zanimanje za moje storitve. Ne glede na to, ali iščete hipnoterapijo, samohipnozo, jasnovidnost ali podporo medija, sem tukaj, da vam pomagam voditi na vaši poti k boljšemu življenju in krepitvi moči.'
    }
  },
  {
    path: 'dogodki',
    component: EventsComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen - Dogodki',
      description: 'Pridružite se nam za nepozabno doživetje na naših prihajajočih dogodkih! Naši dogodki so zasnovani tako, da so transformativni, s priložnostmi za raziskovanje vašega notranjega sveta, povezovanje z drugimi na podobnem potovanju in pridobivanje vpogledov, ki vam bodo pomagali krmariti po vaši poti z večjo lahkoto in jasnostjo. '
    }
  },
  {
    path: 'galerija',
    component: GalleryComponent,
    canActivate: [SeoGuard],
    data: {
      title: 'Hypnosis Studio Alen - Galerija',
      description: 'Razdelek galerije prikazuje izbrano zbirko očarljivih slik in trenutkov, ujetih med različnimi trenutki in tudi nekaj izbranih slik iz revij, kjer se nahajajo moji intervjuji.'
    }
  },
  {
    path: 'review-pregled',
    component: ReviewPregledComponent,
    title: 'Hypnosis studio Alen - Mnenja drugih',
    loadChildren: coreModuleLoader,
    canActivate: [AuthGuardService]
  },
  {
    path: 'events-pregled',
    component: EventsPregledComponent,
    title: 'Hypnosis studio Alen - Dogodki pregled',
    loadChildren: coreModuleLoader,
    canActivate: [AuthGuardService]
  },
  {
    path: 'events-dodaj',
    component: EventsAddComponent,
    title: 'Hypnosis studio Alen - Dodaj nov dogodek',
    canActivate: [AuthGuardService]
  },
  {
    path: 'events/edit/:id',
    component: EventsUrediComponent,
    title: 'Hypnosis studio Alen - Uredi dogodek',
    canActivate: [AuthGuardService]
  },
  {
    path: 'email-pregled',
    component: EmailPregledComponent,
    title: 'Hypnosis studio Alen - Pregled emailov',
    loadChildren: coreModuleLoader,
    canActivate: [AuthGuardService]
  },
  {
    path: 'newsletter-pregled',
    component: NewsletterPregledComponent,
    title: 'Hypnosis studio Alen - Pregled e-novičk',
    loadChildren: coreModuleLoader,
    canActivate: [AuthGuardService]
  },
  {
    path: 'subscribers',
    component: SubscribersPregledComponent,
    title: 'Hypnosis studio Alen - Pregled vpisanih',
    loadChildren: coreModuleLoader,
    canActivate: [AuthGuardService]
  },
  {
    path: 'subscribers/edit/:id',
    component: SubscribersEditComponent,
    title: 'Hypnosis studio Alen - Uredi vpisanega',
    loadChildren: coreModuleLoader,
    canActivate: [AuthGuardService]
  },
  {
    path: 'email/:id',
    component: GetIdComponent,
    title: 'Hypnosis studio Alen - Pregled email vsebine',
    loadChildren: coreModuleLoader,
    canActivate: [AuthGuardService]
  },
  {
    path: 'success',
    component: SuccessComponent,
    title: 'Hypnosis studio Alen - Prijavljeni ste na e-novičke',
    data: {
      shouldRedirect: true
    }
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Hypnosis studio Alen - Stran ne obstaja ali ni najdena',
    data: {
      shouldRedirect: true
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top of the page on each route change
        window.scrollTo(0, 0);
      }
    });
  }
}
