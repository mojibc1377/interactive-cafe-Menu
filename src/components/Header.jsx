import * as React from 'react';
import Sidebar from './sidebar';

function Header(){
	return(
		<div className="header">
			<img className = 'logo' src='/images/icons8-starbucks-512.png' alt='cafe--logo' />
			<div className = 'qeyreAx--header' >	
				<span className='header--title' > کافه هرچی</span>
			</div>
			<Sidebar/>
		</div>
	)
}

export default Header;

