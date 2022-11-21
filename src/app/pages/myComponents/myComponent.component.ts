import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-myComponent',
    templateUrl: './myComponent.component.html',
    styleUrls: ['./myComponent.component.scss']
})
export class MyComponent implements OnInit {
    
    constructor() { }
    // Hace parte del ciclo de vida de un componente
    ngOnInit(): void {

    }
}