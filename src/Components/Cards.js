import React, { Component } from 'react'

export default class Cards extends Component {
  render() {
    let {title,description,imageurl,explore}=this.props
    return (
        <div className='container-fluid mt-5'>
 
                <div className="card image shadow-lg">
                    
                    <img src={imageurl}className="card-img-top setImage" height="300px" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" id='head' >{title}</h5>
                        <p className="card-text" id='card'>{description}</p>
                        <div className='mt-4'>
                        <a href={explore} className="btn btn-primary" id='btn' >Read more</a>
                        </div>
                    </div>
                </div>
        
                {/* <div className='col-sm-3'>
        
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
        
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" id='btn'>Go somewhere</a>
        
                    </div>
        
                </div>
        
                </div>
        
                <div className='col-sm-3'>
        
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" id='btn'>Go somewhere</a>
                    </div>
                </div>
        
                </div> 
        
        
                <div className='col-sm-3'>
        
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" id='btn'>Go somewhere</a>
                    </div>
                </div>
        
                </div>
        
                
        
        </div>
        
        
        
        
        <div className='row my-3'>
        
                <div className='col-sm-3'>
        
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" id='btn' >Go somewhere</a>
                    </div>
                </div>
        
                </div>
        
                <div className='col-sm-3'>
        
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
        
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" id='btn'>Go somewhere</a>
        
                    </div>
        
                </div>
        
                </div>
        
                <div className='col-sm-3'>
        
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" id='btn'>Go somewhere</a>
                    </div>
                </div>
        
                </div> 
        
        
                <div className='col-sm-3'>
        
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" id='btn'>Go somewhere</a>
                    </div>
                </div>
        
                </div> */}
        
                
        
        </div> 
        
    )
  }
}
