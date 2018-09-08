import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-filter',
  templateUrl: './subject-filter.component.html',
  styleUrls: ['./subject-filter.component.css']
})
export class SubjectFilterComponent implements OnInit {

  private selectedType: string = "全部分类";
  private selectedBrand: string = "全部品牌";
  private selectedPrice: string = "全部价格";
  private selectedFormat: string = "全部格式";
  private selectedFrequency: string = "全部更新频率";

  constructor() { }

  ngOnInit() {
  }

  selectType(selectedType: string): void {
    this.selectedType = selectedType;
  }

  selectBrand(selectedBrand: string): void {
    this.selectedBrand = selectedBrand;
  }

  selectPrice(selectedPrice: string): void {
    this.selectedPrice = selectedPrice;
  }

  selectFormat(selectedFormat: string): void {
    this.selectedFormat = selectedFormat;
  }

  selectFrequency(selectedFrequency: string): void {
    this.selectedFrequency = selectedFrequency;
  }
}
