import {Component, Input} from '@angular/core';

@Component({
    selector: 'hero-index',
    templateUrl: './hero.component.html'
})
export class HeroComponent {

    @Input() hero: { naslov: string, podnaslov: string } | undefined

    // Method to scroll to the 'app-offer' component
    scrollToOffer() {
        const offerElement = document.querySelector('offer');

        if (offerElement) {
            // Get the offset top of the element, including the margin
            const offsetTop = offerElement.getBoundingClientRect().top + window.pageYOffset;

            // Scroll slightly above the element (adding 40px margin)
            window.scrollTo({
                top: offsetTop - 140,
                behavior: 'smooth'
            });
        }
    }

}
