import React, { Component } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FeedIcon from '@mui/icons-material/Feed';
import SearchIcon from '@mui/icons-material/Search';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>NW</Avatar>
                    
                   
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-4">
                                    Home
                                </li>
                                <li className="nav-item mx-4">
                                    About Us
                                </li>
                                <li className="nav-item">
                                    Contact Us
                                </li>
                            </ul>
                            <div className="icons">
                            <NewspaperIcon />
                            <FeedIcon />
                            <SearchIcon/>

                            </div>
                           
                        </div>
                    </div>
                </nav>
                <LinearProgress />
            </div>
            
        )
    }
}
