
import {Component, Inject} from "@angular/core";
import {APP_CONFIG} from "../app-config-data";
import {AppConfig} from "../app-config-interface";
import {Logger} from "../logger.service";
import {HeroService} from "../9.DependenciesInjection/hero.service";
@Component({
    selector: 'chapter10',
    templateUrl: './chapter10.component.html'
})


export class Chapter10Component {
    public test = '';
    public title = '';
    private config = null ;
    public heroes = null;

    constructor(@Inject(APP_CONFIG) config: AppConfig, public logger: Logger, heroService: HeroService) {
        this.title = config.title;
        this.config = config;
        this.heroes = heroService.getHeroes();

    }
}
