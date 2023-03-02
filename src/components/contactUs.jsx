import * as React from 'react';
export default function ContactUs(){
    return(
        <ul className='list--contactUs'>
            <li className='insta'>
				<a href='https://instagram.com/_flowcafe_/'><img className='insta' src='/images/icons8-instagram-100.png' alt='insta'/></a>
			</li>
			<li className='phone'>
				<a href="tel:+981333772924" class="phoneMe"><img className='phone' src='/images/icons8-phone-90.png' alt='phone' ></img> </a>
			</li>
			<li className = 'location'>
				<a href='https://goo.gl/maps/J3EfWHfW6wBia89R7'><img className = 'location' src='/images/icons8-place-marker-90.png' alt='location'/></a>
			</li>
		</ul>
    )
}