import { Component } from "../core/component-decorators";
import { CustomerActionCreator } from "./customer.action-creator";

@Component({
    selector: "customer-editor",
    tempalteUrl: "./customer-editor.component.html"
})
export class CustomerEditorComponent {

    storeOnChanges = state => { }

}