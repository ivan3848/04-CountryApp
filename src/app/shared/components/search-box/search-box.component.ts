import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer = new Subject<string>();
  private debounceSuscription = new Subscription();

  ngOnInit(): void {
    this.debounceSuscription = this.debouncer.
      pipe(
        debounceTime(300)
      )
      .subscribe((value: string) => this.onChange.emit(value));
  }

  ngOnDestroy(): void {
    this.debounceSuscription.unsubscribe();
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
