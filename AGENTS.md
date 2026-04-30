# AGENTS.md

## Architecture Overview
This is an Angular 16 SSR application for a hypnosis studio website, communicating with a separate Flask backend API. The app uses modular architecture with CoreModule (pages/services) and SharedModule (reusable components). Data flows from API services to components via RxJS observables, with authentication via JWT tokens stored in localStorage.

## Key Patterns
- **API Services**: Separate public/admin endpoints in services like `src/app/core/services/api/blog.service.ts`. Use HttpClient with catchError for error handling, e.g., `getAllBlog(): Observable<Blog[]>` calls `${environment.backUrl}/blog`.
- **Models**: Interfaces in `src/app/core/models/` with Slovenian fields like `datum_vnosa` (entry date) and optional `_id` for MongoDB, e.g., `Blog` interface.
- **Forms**: Reactive forms with FormBuilder and Validators, e.g., in `src/app/core/footer/footer.component.ts` for newsletter subscription.
- **Authentication**: JWT via interceptor adding Bearer header; AuthGuard protects admin routes; login uses FormData.
- **Communication**: Subject-based service for cross-component updates, e.g., `DataUpdateService` in `src/app/core/services/communication/`.
- **Styling**: SCSS with Bootstrap imports in `src/styles.scss`; custom components in `src/styles/components/`; fonts Montserrat/Playfair Display.
- **Content**: Static JSON in `src/assets/` for page content, e.g., `hipnoterapija.json` with Slovenian text.
- **SSR/Prerendering**: Enabled with `ng run` commands; routes load CoreModule lazily.

## Developer Workflows
- **Development**: `npm run dev` (serve with dev config); `npm run dev:ssr` for SSR dev.
- **Build**: `npm run build` (production); `npm run build:ssr` for SSR build; `npm run prerender` for static generation.
- **Testing**: `npm run test` runs Karma/Jasmine.
- **Backend**: Local at `http://127.0.0.1:8000` (dev/prod), external logs API.

## Conventions
- Locale set to 'sl' (Slovenian) in `src/app/app.module.ts`; all UI text in Slovenian.
- Components use AngularEditor with shared config from `src/app/shared/config/editor-config.ts`.
- Error handling: Console.error in services; SnackbarService for user messages.
- Guards: SeoGuard sets meta tags on public routes; AuthGuard checks login.
- Utils: `@trace()` decorator for debugging in `src/app/core/utils/trace.ts`.</content>
<parameter name="filePath">C:\Users\Danilo\Desktop\Personal\APP\hsalen-app\AGENTS.md
