import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { DragDropDirective } from './drag-drop.directive';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ExcelService } from './services/excel.service';

@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
