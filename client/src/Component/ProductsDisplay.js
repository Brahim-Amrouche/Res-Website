
import React , {Component} from 'react';
import potato from '../sources/potato.jpg';
import book from '../sources/book.jpg';
import car from '../sources/car.jpg';
import headphone from '../sources/headphone.jpg';
import phone from '../sources/phone.jpg';
import shoe from "../sources/shoe.jpg";

class ProductsDisplay extends Component{
    constructor(props){
       
        super(props);
             
        this.state={
        items:[{
            "_id":1,
            "name":"Book",
            "price":100,
            "image":book,
            "Description":"Lorem ipsum dolor"
        },
        {
            "_id":2,
            "name":"Car",
            "price":1500,
            "image":car,
            "Description":"Lorem ipsum dolor"
        }
        ,
        {
            "_id":3,
            "name":"Headphone",
            "price":200,
            "image":headphone,
            "Description":"Lorem ipsum dolor , Coular mogolus , valar mogulis , valar dohairis,sdsdjskdj,sdskdsdzpoed"
        }
        ,
        {
            "_id":4,
            "name":"phone",
            "price":700,
            "image":phone,
            "Description":"Lorem ipsum dolor , Coular mogolus , valar mogulis , valar dohairis,sdsdjskdj,sdskdsdzpoed"
        }
        ,
        {
            "_id":5,
            "name":"potato",
            "price":100,
            "image":shoe,
            "Description":"Lorem ipsum dolor , Coular mogolus , valar mogulis , valar dohairis,sdsdjskdj,sdskdsdzpoed"
        }
        ,
        {
            "_id":6,
            "name":"Should Not",
            "price":200,
            "image":potato,
            "Description":"Lorem ipsum dolor , Coular mogolus , valar mogulis , valar dohairis,sdsdjskdj,sdskdsdzpoed"
        }
        ],
        identity:-1
        ,

        rightActivated:'block'
        ,
        leftActivated:'block'
        }
    }
    componentDidMount(){
        if(this.state.identity<=-1){
            this.setState((prevState,props)=>({
                leftActivated:'none'
            }))
        }
        
    }
    
    
    
    handleClickForward=()=>{
        
        if(this.state.identity<this.state.items.length-2){
            this.setState((prevState,props)=>({
                identity:prevState.identity+5
                
            }),()=>{
                if(this.state.identity>=this.state.items.length-2){
                
                    this.setState((prevState,props)=>({
                        rightActivated:'none'
                    }))
                }
                if(this.state.identity>0){
                    this.setState((prevState,props)=>({
                        leftActivated:'block'
                    }))
                    
                }
            })

            
           
        }
        
       
        
    }
    handleClickBackward=()=>{
        if(this.state.identity>0){
            this.setState((prevState,props)=>({
                identity:prevState.identity-5,
                
            }),()=>{
                if(this.state.identity<this.state.items.length-2){
                    this.setState((prevState,props)=>({
                        rightActivated:'block'
                    }))

                }
                if(this.state.identity<=0){
                    this.setState((prevState,props)=>({
                        leftActivated:'none'
                    }))
                }
                
            })
        }
        
    }


    displayProducts=(i=0 , id )=>{
        const items=this.state.items
        const length=items.length;
        
        return <div>{items.map(()=>{
            if(i<5 && length-1>id){
                
                id++
                i++
                return(<div className="product-style" key={items[id]._id}>
                        <img  src={items[id].image} alt={items[id].name} />
                        <div className="product-detail">
                            <h1>{items[id].name} </h1>
                            <p>{items[id].Description}</p>
                        </div>
                        <div className="product-buy">
                            <a href="/">for  {items[id].price} $</a>
                        </div>
                    </div>
                )
                
            }
            
            return null;
        })}
        </div>
    }
    appendId=(count)=>{
        
    }
    
    render(){
      
        
       return( <div className="Products" id="products">
                <div className="colorfull-product"></div>
                <h1 className="product-label">Our Products</h1>
                <button className="btn-3 btn-right" style={{display:`${this.state.rightActivated}`}} onClick={this.handleClickForward}>  {">"} </button>
                <button  className="btn-3 btn-left" style={{display:`${this.state.leftActivated}`}} onClick={this.handleClickBackward}>  {"<"} </button>
                {this.displayProducts(0,this.state.identity )}
                
                
                
            </div>
       )
    }
}
export default ProductsDisplay;