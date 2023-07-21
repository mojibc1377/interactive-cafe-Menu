import * as React from 'react';
import Sidebar from './sidebar';

function Header(){
	return(
		<div className="header lg:px-5">
			<img className = 'logo lg:mr-6' src='/flow.png' alt='cafe--logo' />
			<div className = 'qeyreAx--header' >	
				
			</div>
			<Sidebar/>
		</div>
	)
}

export default Header;

