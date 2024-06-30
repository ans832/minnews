import React, { Component } from 'react'
import Newsitem from './Newsitem'
// import Spin from './Spin'

export class News extends Component {
 




  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c1e2c6fab8a34a4bbc44341de1daeea9&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({articles: parsedata.articles, totalArticles: parsedata.totalResults,
      // loading:false
      

     })

  }
   handleprevclick = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c1e2c6fab8a34a4bbc44341de1daeea9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
      // loading: false
     })

  }
   handleneclick = async()=>{
    if( !this.state.page + 1 > Math.ceil[this.state.totalResults/this.props.pageSize]){
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c1e2c6fab8a34a4bbc44341de1daeea9&page=${this.state.page +1 }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({
      page: this.state.page + 1,
      articles: parsedata.articles
     })
    }

  }
  render() {
    return (
      
        <div className='container my-3' >
        <h1 className='text-center'>newsmonk - Top Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        {/* { this.state.icons8-spinner && <Spin/>} */}
        <div className='row'>
          {this.state.articles.map( (element)=>{

             return <div className='col-md-4' key={element.url}>
             <Newsitem title={element.title?element.title.slice(0, 45):""}  description={element.description?element.description.slice(0, 88):""} imageurl={element.urlToImage} newsurl={element.url}/>
             </div>

          })}
         
         
        </div>
        <div className='container d-flex justify-content-between '>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; previous</button>
        <button disabled={this.state.page - 1 > Math.ceil[this.state.totalResults/this.props.pageSize]} type="button" className="btn btn-dark" onClick={this.handleneclick}>next &rarr; </button>
        </div>
        
         
      
        
      </div>
    )
  }
}

export default News
