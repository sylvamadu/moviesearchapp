import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Main() {
    const[aPIData, setAPIData] = useState([])
    const[filteredData, setFilteredData] = useState(aPIData)
    const[searchInput, setSearchInput] = useState('')
    // const key = `https://6232e9536de3467dbac2f604.mockapi.io/check`

    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=e02cc6fd`)
        .then(response =>{
            setAPIData([response.data])
        })
    },[])

    const searchItems = (searchValue)=>{
        setSearchInput(searchValue)
        if(searchInput !== ''){
            const filtered = aPIData.filter((item)=>{
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredData(filtered)
        }
        else{
            setFilteredData(aPIData)
        }
    }
    console.log(aPIData)

    // const {Title, Poster, Actors} = filteredData
  return (
    <div className='container main'>
        <div className='search'>
            <form >
                <input type="text" placeholder='Enter search' onChange={(e)=>searchItems(e.target.value)}/>
            </form>
        </div>
        <div className="display">
            <div className="row">
               {filteredData.length > 0?(
                   filteredData.map((element)=>(
                    <div className="col-sm-12 col-md-6">
                    <div className="card">
                        <div className="content">
                            <h3>{element.Title}</h3>
                            <img src={element.Poster} alt="icons" />
                            <p>
                               Actors are:  {element.Actors}
                            </p>
                        </div>
                    </div>
                    </div>
                   ))
               ):(
                // aPIData.map((element)=>(
                //     <div className="col-sm-12 col-md-3">
                //     <div className="card">
                //         <div className="content">
                //             <h3>{element.Title}</h3>
                //             <img src={element.Poster} alt="icons" />
                //             <p>
                //                 {element.Actors}
                //             </p>
                //         </div>
                //     </div>
                //     </div>
                //    ))
                <h3>no data</h3>
               )
                   
               }
            
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <div className="card">
                        <div className="content">
                            <h3>Title of this movie</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ab, qui deserunt ea sequi harum architecto modi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3">
                <div className="card">
                        <div className="content">
                            <h3>Title of this movie</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ab, qui deserunt ea sequi harum architecto modi.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-3">
                    <div className="card">
                        <div className="content">
                            <h3>Title of this movie</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ab, qui deserunt ea sequi harum architecto modi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3">
                <div className="card">
                        <div className="content">
                            <h3>Title of this movie</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ab, qui deserunt ea sequi harum architecto modi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3">
                    <div className="card">
                        <div className="content">
                            <h3>Title of this movie</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ab, qui deserunt ea sequi harum architecto modi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3">
                <div className="card">
                        <div className="content">
                            <h3>Title of this movie</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ab, qui deserunt ea sequi harum architecto modi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
