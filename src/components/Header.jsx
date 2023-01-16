import * as React from 'react';

function Header(){
	return(
		<div className="header">
			<img className = 'logo' src='/images/icons8-starbucks-512.png' alt='cafe--logo' />
			<div className = 'qeyreAx--header' >	
				<span className='header--title' > کافه پاول</span>
                <hr/>
					<ul className='list--contactUs'>
						<li className='insta'>
							<a href='http://www.google.com'><img className='insta' src='/images/icons8-instagram-192.png' alt='insta'/></a>
						</li>
						<li className='phone'>
							<img className='phone' src='/images/icons8-phone-48.png' alt='phone'/> todo
						</li>
						<li className = 'location'>
							<a href='https://goo.gl/maps/J3EfWHfW6wBia89R7'><img className = 'location' src='/images/icons8-place-marker-48.png' alt='location'/></a>
							{/* [um-iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.843625984415!2d49.58261605692781!3d37.30397729636851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401fd8c966151241%3A0x7a580f8b3205f1aa!2sGolsar%20Tower!5e0!3m2!1sen!2s!4v1673805386010!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"] */}
						</li>
					</ul>
                    <p id='lorem'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی</p>
                    <br/>
			</div>
			
		</div>
	)
}

export default Header;

