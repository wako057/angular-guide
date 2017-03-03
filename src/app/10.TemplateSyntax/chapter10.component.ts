
import {Component, Inject, style} from "@angular/core";
import {APP_CONFIG} from "../app-config-data";
import {AppConfig} from "../app-config-interface";
import {Logger} from "../logger.service";
import {HeroService} from "../9.DependenciesInjection/hero.service";
@Component({
    selector: 'chapter10',
    templateUrl: './chapter10.component.html',
    styles: [ '.special{color:red;}' ]
})


export class Chapter10Component {
    public test = '';
    public title = '';
    private config = null ;
    public heroes = null;
    public heroImageUrl = '';
    private evilTitle;


    constructor(@Inject(APP_CONFIG) config: AppConfig, public logger: Logger, heroService: HeroService) {
        this.title = config.title;
        this.config = config;
        this.heroes = heroService.getHeroes();
        this.heroImageUrl = 'dev.wister.biz:4200/hero.jpg';
        // app.use(express.static(__dirname + '/public'));
        this.heroImageUrl = '/assets/images/hero.jpg';
        this.evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

    }
}
