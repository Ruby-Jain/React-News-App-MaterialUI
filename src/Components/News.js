import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import LinearProgress from '@mui/material/LinearProgress';


export class News extends Component {
    /*  articles = [
         {
             "source": {
                 "id": "news24",
                 "name": "News24"
             },
             "author": "Compiled by Herman Mostert",
             "title": "The 10 South African cricketers sold in IPL auction - and their price tags",
             "description": "Ten South African cricketers were sold during the past weekend's Indian Premier League auction.",
             "url": "https://www.news24.com/sport/Cricket/IPL/the-10-south-african-cricketers-sold-in-ipl-auction-20220214",
             "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/2653/cb4706e502af485d85bd99e1e69b7e56.jpg",
             "publishedAt": "2022-02-14T09:04:29+00:00",
             "content": "<ul><li>There were 10 South Africans sold in the past weekend's IPL auction. </li><li>Kagiso Rabada was the most expensive of the SA contingent after being snapped up for over R18 million.</li><li>An… [+2190 chars]"
         },
         {
             "source": {
                 "id": "espn-cric-info",
                 "name": "ESPN Cric Info"
             },
             "author": null,
             "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
             "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
             "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
             "publishedAt": "2020-04-27T11:41:47Z",
             "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
         },
         {
             "source": {
                 "id": "espn-cric-info",
                 "name": "ESPN Cric Info"
             },
             "author": null,
             "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
             "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
             "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
             "publishedAt": "2020-03-30T15:26:05Z",
             "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
         }
     ] */
    constructor() {
        super();
        console.log("I'm a Constructor");
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=bb05ba0ab5164ff9b9376b95c5bc6104";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    }
    render() {
        console.log("render");
        return (
            <div className='container my-3'>
                <h1 className='text-center my-4.5'>News Website Top Headlines</h1>
                <LinearProgress color="success" />
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <LinearProgress color="secondary" /><br />

                <Avatar style={{ left: "600px", position: "relative" }} sx={{ bgcolor: deepOrange[500] }}>NW</Avatar>
            </div>
        )
    }
}
export default News