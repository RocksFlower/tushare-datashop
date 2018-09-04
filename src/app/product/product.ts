export class Product {
    private productTitle: string;
    private showBookButton: boolean;
    private publishData: string;
    private brand: string;
    private format: string;
    private updateFrequency: string;
    private description: string;

    public setProductTitle(productTitle: string){
        this.productTitle = productTitle;
    }
    public getProductTitle(): string{
        return this.productTitle;
    }
    public setShowBookButton(showBookButton: boolean){
        this.showBookButton = showBookButton;
    }
    public getShowBookButton(): boolean{
        return this.showBookButton;
    }
    public setPublishData(publishData: string){
        this.publishData = publishData;
    }
    public getPublishData(): string{
        return this.publishData;
    }
    public setBrand(brand: string){
        this.brand = brand;
    }
    public getBrand(): string{
        return this.brand;
    }
    public setFormat(format: string){
        this.format = format;
    }
    public getFormat(): string{
        return this.format;
    }
    public setUpdateFrequency(updateFrequency: string){
        this.updateFrequency = updateFrequency;
    }
    public getUpdateFrequency(): string{
        return this.updateFrequency;
    }
    public setDescription(description: string){
        this.description = description;
    }
    public getDescription(): string{
        return this.description;
    }
}
