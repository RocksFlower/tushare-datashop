import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-filter',
  templateUrl: './subject-filter.component.html',
  styleUrls: ['./subject-filter.component.css']
})
export class SubjectFilterComponent implements OnInit {

  private filterList: Array<SubjectFilter> = new Array<SubjectFilter>();

  constructor() { }

  ngOnInit() {
    let subjectFilter:SubjectFilter = new SubjectFilter();
    subjectFilter.setSubject('分类');
    subjectFilter.setSubjectKeys(['基本信息', '财务报表', '业绩预期', '投融资与分红', '重大事项', '股东与股本', '沪港通', '行情', '因子', '风险模型']);
    subjectFilter.setSubjectLebel('全部分类');
    this.filterList.push(subjectFilter);

    let brandFilter:SubjectFilter = new SubjectFilter();
    brandFilter.setSubject('品牌');
    brandFilter.setSubjectKeys(['中诚信资讯', '巨灵财经', 'TEJ', 'IVolatility', '中债', '通联数据']);
    brandFilter.setSubjectLebel('全部品牌');
    this.filterList.push(brandFilter);

    let priceFilter:SubjectFilter = new SubjectFilter();
    priceFilter.setSubject('价格');
    priceFilter.setSubjectKeys(['免费', '计费']);
    priceFilter.setSubjectLebel('全部价格');
    this.filterList.push(priceFilter);

    let formatFilter:SubjectFilter = new SubjectFilter();
    formatFilter.setSubject('格式');
    formatFilter.setSubjectKeys(['api', '研报']);
    formatFilter.setSubjectLebel('全部格式');
    this.filterList.push(formatFilter);

    let frequentsFilter:SubjectFilter = new SubjectFilter();
    frequentsFilter.setSubject('更新频率');
    frequentsFilter.setSubjectKeys(['实时', '年', '月', '日', '季', '周', '半年', '其他']);
    frequentsFilter.setSubjectLebel('全部更新频率');
    this.filterList.push(frequentsFilter);
  }

  selectLabel(selectedFilter: SubjectFilter, selectedType: string): void {
    selectedFilter.setSubjectLebel(selectedType);
  }

  // selectType(selectedType: string): void {
  //   this.selectedType = selectedType;
  // }

  // selectBrand(selectedBrand: string): void {
  //   this.selectedBrand = selectedBrand;
  // }

  // selectPrice(selectedPrice: string): void {
  //   this.selectedPrice = selectedPrice;
  // }

  // selectFormat(selectedFormat: string): void {
  //   this.selectedFormat = selectedFormat;
  // }

  // selectFrequency(selectedFrequency: string): void {
  //   this.selectedFrequency = selectedFrequency;
  // }
}

class SubjectFilter {
  public subject:string;
  public subjectKeys:Array<string>;
  public subjectLebel:string;

  public setSubject(subject: string){
    this.subject = subject;
  }

  public setSubjectKeys(subjectKeys: Array<string>){
    this.subjectKeys = subjectKeys;
  }

  public setSubjectLebel(subjectLebel: string){
    this.subjectLebel = subjectLebel;
  }
}
