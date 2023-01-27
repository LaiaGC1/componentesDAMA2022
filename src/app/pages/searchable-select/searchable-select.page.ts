import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-searchable-select',
  templateUrl: './searchable-select.page.html',
  styleUrls: ['./searchable-select.page.scss'],
})
export class SearchableSelectPage implements OnChanges {

  @Output() selectedChanged: EventEmitter<any> = new EventEmitter();

  title = 'Search';
  multiple = false;
  itemTextField = 'name.first';
  users = [];
  isOpen = false;
  selected: any[] = [];
  filtered: any[] = [];

  constructor(private dataService: DataService) {
    this.loadUsers();
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.filtered = this.users;
  }

  open(){
    this.isOpen = true;
  }
  cancel(){
    this.isOpen = false;
  }
  confirm(){
    this.isOpen = false;
  }
  /* fin del modal */

  leaf = (obj: any) => {
    return this.itemTextField.split('.')
      .reduce((value, el)=> value[el],obj);
  }

  itemSelected(myItem: any){
    if(!this.multiple){
      if(this.selected.length){
        this.selected = [];
        this.filtered.forEach((item:any) => item.selected = false);
        this.filtered[this.filtered.findIndex(
          item => item === myItem
        )].selected = true;
      }
    }

    if(myItem.selected){
      this.selected.push(myItem);
    }else {
      this.selected.splice(this.selected.indexOf(myItem),1);
    }
    this.selectedChanged.emit(this.selected);
    if(!this.multiple){
      this.isOpen = false;
    }
  }

  filter(event:any){
    const  filter = event.detail.value.toLowerCase();
    this.filtered = this.users.filter(
      item => this.leaf(item).toLowerCase().indexOf(filter) >= 0
    );
  }


  private loadUsers() {
    this.dataService.loadUsers().subscribe(
      (res:any)=>{
        this.users = res.results;
        this.filtered = this.users;
      }
    )

  }
}
