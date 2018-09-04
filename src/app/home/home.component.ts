import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private productDataList: Array<Product>;
  currentPage = 1;

  constructor() { }

  ngOnInit() {
    this.productDataList = new Array<Product>();
  
    let productData = new Product();
    productData = new Product();
    productData.setProductTitle("港股日行情");
    productData.setShowBookButton(false);
    productData.setPublishData("2015-01-01");
    productData.setBrand("巨灵财经");
    productData.setFormat("api");
    productData.setUpdateFrequency("日");
    productData.setDescription("本表记录港股日行情信息。包括交易日期、开盘价、收盘价、成交量、委托买卖情况、涨跌等重要行情指标，历史追溯至1986年，每日更新。");

    this.productDataList.push(productData);

    let productData2 = new Product();
    productData2 = new Product();
    productData2.setProductTitle("上市公司资产负债表");
    productData2.setShowBookButton(true);
    productData2.setPublishData("2015-01-01");
    productData2.setBrand("中诚信资讯");
    productData2.setFormat("api");
    productData2.setUpdateFrequency("季");
    productData2.setDescription("1、依据2007年新会计准则收集了上市公司定期报告中各个期间资产负债表数据，并依据新旧会计准则的科目对应关系，收录主要科目的历史对应数据； 2、收集合并报表、母公司报表对应的数据； 3、如果上市公司对外财务报表进行更正，调整，该表展示最新调整数据； 4、本表中单位为人民币元。");

    this.productDataList.push(productData2);

    this.productDataList.push(productData);
    this.productDataList.push(productData2);
    this.productDataList.push(productData);
    this.productDataList.push(productData2);
    this.productDataList.push(productData);
    this.productDataList.push(productData2);
    this.productDataList.push(productData);
    this.productDataList.push(productData2);
  }

}
