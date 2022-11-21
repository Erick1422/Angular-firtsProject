// Esto también se puede crear con el CLI
import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar'

// Marca el comportamiento de una clase
@NgModule({
    exports: [MatToolbarModule] // Todo lo que se exporte acá estará disponible en toda la aplicación
})

export class MaterialModule {}