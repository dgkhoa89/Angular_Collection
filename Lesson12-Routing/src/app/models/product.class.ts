export class product{
    public id:number=0;
    public name:string='';
    public price:number=0;
    public status:boolean=true;

    constructor(name:string,price:number,status:boolean){
        this.name = name;
        this.price = price;
        this.status = status;
    }
    
}