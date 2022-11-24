// Esto también se puede crear con el CLI
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Marca el comportamiento de una clase
@NgModule({
    // Todo lo que se exporte acá estará disponible en toda la aplicación
    exports: [ 
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})

export class MaterialModule {}