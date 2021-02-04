import React , {Component} from 'react';
import Service from '../sources/Service.jpg';
import programming from '../sources/programing.jpg';
import coaching from '../sources/coaching.jpg';
import design from '../sources/design.jpg';
import fitness from '../sources/fitness.jpg';
import music from '../sources/music.jpg';

class ServicesDisplay extends Component{
    constructor(props){
        super(props)

        this.state={
            items:[{
                "_id":1,
                "name":"Programming",
                "price":300,
                "image":programming,
                "Description":"Lorem ipsum dolor"
            },
            {
                "_id":2,
                "name":"Career Coach",
                "price":200,
                "image":coaching,
                "Description":"Lorem ipsum dolor"
            },
            {
                "_id":3,
                "name":"Graphic Design",
                "price":200,
                "image":design,
                "Description":"Lorem ipsum dolor"
            }
            ,
            {
                "_id":4,
                "name":"Fitness Coach",
                "price":240,
                "image":fitness,
                "Description":"Lorem ipsum dolor"
            }
            ,
            {
                "_id":5,
                "name":"Music Composing",
                "price":150,
                "image":music,
                "Description":"Lorem ipsum dolor"
            }
            ,
            {
                "_id":6,
                "name":"Off Shoring",
                "price":200,
                "image":Service,
                "Description":"Lorem ipsum dolor"
            }
            ],
            identity:-1,
            rightActivated:"Block",
            leftActivated:"Block"

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

    displayService=(i=0,id)=>{
        const items=this.state.items;
        const length=items.length;

        return(<div>{items.map(()=>{
            if(i<5 && length-1>id){
                id++
                i++
                return(<div className="service-style" key={items[id]._id}>
                <img  src={items[id].image} alt={items[id].name} />
                        <div className="service-detail">
                            <h1>{items[id].name} </h1>
                            <p>{items[id].Description}</p>
                        </div>
                        <div className="service-buy">
                            <a href="/">for  {items[id].price} $</a>
                        </div>

                </div>

                )
            }
            return null;
        })}
        </div>)
    }
    render(){
        return (<div className="services" id="services">
                <div className="colorfull-service"></div>
                <h1 className="service-label">Our Services</h1>
                <button className="btn-4 btn-right" style={{display:`${this.state.rightActivated}`}} onClick={this.handleClickForward}>{">"}</button>
                <button className="btn-4 btn-left"   style={{display:`${this.state.leftActivated}`}}  onClick={this.handleClickBackward}>{"<"}</button>
                {this.displayService(0,this.state.identity)}


            </div>)
    }


}


export default ServicesDisplay;