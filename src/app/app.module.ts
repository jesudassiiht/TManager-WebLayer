import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { CreateTaskComponentComponent } from './create-task-component/create-task-component.component';
import { ListTaskComponentComponent } from './list-task-component/list-task-component.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ModalComponent } from './directives/model.component';
import { ModalService } from './services/model.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    CreateTaskComponentComponent,
    ListTaskComponentComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
