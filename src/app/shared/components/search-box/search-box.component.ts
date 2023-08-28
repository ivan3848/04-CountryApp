import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  private debouncer = new Subject<string>();

  ngOnInit(): void {
    this.debouncer.
      pipe(
        debounceTime(300)
      )
      .subscribe( value => this.onChange.emit(value));
  }

  @Input()
  public placeholder: string = '';

  @Output()
  public onChange = new EventEmitter<string>();

  @ViewChild('txtSearch')
  public search!: ElementRef<HTMLInputElement>

  public sendSearchTerm() {
    this.debouncer.next(this.search.nativeElement.value);
  }
}
