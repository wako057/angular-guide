import {Injectable} from "@angular/core";

@Injectable()
export interface AppConfig {
    apiEndpoint: string;
    title: string;
}
