import MeetupList from '../components/meetups/MeetupList';
import {useState ,useEffect} from 'react';

function Allmeetuppage(){

	const [isloading,setloading] = useState(true);
	const [loadedmeetups,setloadedmeetups] = useState([]);
	
	useEffect(() => {
	setloading(true);
	fetch('https://react-pro-started-default-rtdb.firebaseio.com/meetups.json')

		.then((response) =>
			{

			return response.json();
		})
		.then((data) => 
		{
			const meetups = [];

			for(const key in data)
			{
				const meetup =
				{
					id:key,
					...data[key]
				};
				meetups.push(meetup);
			}
			setloading(false);
			setloadedmeetups(meetups);
		});

	},[]);

	if(isloading){
			return(

				<section>
					<p>
						Loading..
					</p>
				</section>
			);
		}

	return(
	<section>
		<h1>All MeetUps</h1>
		<MeetupList meetups={loadedmeetups}/>
	</section>
	);
}

export default Allmeetuppage;