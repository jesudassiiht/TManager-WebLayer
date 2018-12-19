import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule } from   '@angular/common/http/testing';
import { RouterTestingModule } from   '@angular/router/testing';
import { ListTaskComponentComponent } from './list-task-component.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { ModalService } from '../services/model.service';
import { ModalComponent } from '../directives/model.component';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('List-Task-Component-Testing the list-task', () => {
  let component: ListTaskComponentComponent;
  let fixture: ComponentFixture<ListTaskComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTaskComponentComponent,FilterPipe,ModalComponent],
      imports:[
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,FormsModule
      ],
      providers:[ModalService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});