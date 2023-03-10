import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchableSelectPageRoutingModule } from './searchable-select-routing.module';

import { SearchableSelectPage } from './searchable-select.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchableSelectPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearchableSelectPage]
})
export class SearchableSelectPageModule {}
