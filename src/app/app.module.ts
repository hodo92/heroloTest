import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//#region Modules

// Material
import {
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
}

from '@angular/material';

// in memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//#region Components
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';

import { BookApiService } from './services/book-api.service';

import { TitlePipe } from './pipes/title.pipe';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        HttpClientInMemoryWebApiModule,
    ],
    declarations: [
        AppComponent,
        AddBookComponent,
        BookListComponent,
        TitlePipe,
        BookListComponent,
        AddBookComponent,
    ],
    entryComponents: [
        AddBookComponent,
        BookListComponent,
        
    ],
    providers: [
        TitlePipe,
        BookApiService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
