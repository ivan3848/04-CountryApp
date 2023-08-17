import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onChange = new EventEmitter<string>();

  @ViewChild('txtSearch')
  public search!: ElementRef<HTMLInputElement>

  public sendSearchTerm(){
    this.onChange.emit(this.search.nativeElement.value);
    this.search.nativeElement.value = '';
  }
}
