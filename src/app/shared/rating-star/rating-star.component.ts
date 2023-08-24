import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss']
})
export class RatingStarComponent implements OnInit,OnChanges {
  @Output()
  ratingClicked:EventEmitter<string> = new EventEmitter<string>();
  @Input()
  starCount=0
  protected readonly Array = Array;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['starCount']){
      this.starCount=Math.round(changes['starCount']['currentValue'])
    }
  }

  onRatingClicked(){
    this.ratingClicked.emit(`The rating is ${this.starCount}`)
  }
}
