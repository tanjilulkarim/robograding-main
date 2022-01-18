import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

const Submissions = () => {
	return (
		<>
			<div style={{}} className='submission-header'>
				<h2>Submissions</h2>
				<div className='search-box'>
					<SearchIcon />
					<input type='text' placeholder='Search' />
				</div>
				<Button className='submission-btn'>
					<Link to='/dashboard/submission/new'>New Submission</Link>
				</Button>
            </div>
            <hr />
            <div className='submission-body'>
                <p>Submission Content Will Appeare Here!</p>
            </div>
		</>
	);
};

export default Submissions;
