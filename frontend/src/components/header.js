import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
        return(
                <div className="ui pointing secondary menu">
                        <Link to='/' className="item">
                                ToDo List
                        </Link>
                        <Link to='/' className="item">
                                Incomplete Tasks
                        </Link>
                        <Link to="/complete" className="item">
                                Completed Tasks
                        </Link>
                </div>
        );
};

export default Header;