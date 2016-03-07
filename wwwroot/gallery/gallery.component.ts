import { Component } from "../core/component-decorators";
import { CustomerActionCreator } from "./gallery.action-creator";

@Component({
    selector: "galler",
    tempalteUrl: "./gallery.component.html"
})
export class CustomerEditorComponent {

    storeOnChanges = state => { }

}