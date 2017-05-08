import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
    getAds(){
        return [
            new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),
            new AdItem(HeroProfileComponent, {name: 'Amigo', bio: 'BraAmigove as they come'})
        ];
    }
}