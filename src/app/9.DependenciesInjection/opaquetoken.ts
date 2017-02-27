import { OpaqueToken } from '@angular/core';
import { }

export let APP_CONFIG = new OpaqueToken('app.config');

providers: [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]

constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
}
