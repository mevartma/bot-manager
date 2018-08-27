import { NgModule } from '@angular/core';

import { BotManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BotManagerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BotManagerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BotManagerSharedCommonModule {}
