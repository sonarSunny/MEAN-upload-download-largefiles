import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { DragDropDirective } from './drag-drop.directive';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ExcelService } from './services/excel.service';
import { NgxUiLoaderModule } from  'ngx-ui-loader';


@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
