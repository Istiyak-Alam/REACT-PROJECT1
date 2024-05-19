import React, { Component } from 'react'

export default class Footernews extends Component {
  render() {
    return (
      <div>

        <div className='boxcontainer'>
            <center><h5 className='text-light py-3'>Copyright © 2024. All Right Reserved from BBC news</h5></center> 


            <div className='row my-3'>
            <div className='col-sm-4'>
                <center>
                <ul style={{listStyleType:"none"}}>
                    <li>Latest Updates</li>
                    <li>Sports</li>
                    <li>Food</li>
                    <li>Number 1 News</li>
                    <li>Trending</li>
                </ul>
                </center>
            </div>

            <div className='col-sm-4 mt-4'>
            <center>
                <h4>DLF CITY, Gurugram, Haryana, 190122</h4>    
                <p className=''>Contact Number:9811546388</p>
            </center>    
            </div>

            <div className='col-sm-4 mt-4'>
            <center>
                <h4>Location</h4>    
                <p>Map</p>
            </center>
            </div>


        </div>


        </div>  

        
      </div>
    )
  }
}
