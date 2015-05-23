import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, NgIf} from 'angular2/angular2';

@Component({
    selector: 'app'
})
@View({
    template: `<span *ng-if="name">Hello, {{name}}!</span>`,
    directives: [NgIf]
})
export class App {
    name: string = 'World 2';
    constructor() {
        setTimeout(() => {
          this.name = 'NEW World 2'
        }, 2000);
    }
}

bootstrap(App);
