import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { CardModule } from './../../cards/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { FilterByDescription } from './filter-search.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        CardModule 
    ]
})
export class PhotoListModule {}