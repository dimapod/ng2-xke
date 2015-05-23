import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, NgIf} from 'angular2/angular2';

@Component({
    selector: 'tuto'
})
@View({
    templateUrl: 'tuto/tuto.html',
    directives: [NgIf]
})
export class Tuto {
    name:string = 'TUTO';

    constructor() {


    }


}

bootstrap(Tuto);

// ------------------


class Step {
    title:String = "";
    detailTemplateName:String = "tutorial-step-empty";
    solutionTemplateName:String = "tutorial-solution-empty";
    passed:boolean = false;
    executed:boolean = false;
    errors = [];
    isActive = function () {
        return !this.passed && this.executed;
    };

    constructor(obj) {
        for (var prop in obj) {
            this[prop] = obj[prop];
        }
    }
}

