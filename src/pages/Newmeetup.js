import NewmeetupForm from '../components/meetups/NewmeetupForm';
import { useHistory } from 'react-router-dom';

function NewMeetuppage(){

	const history = useHistory();

	function addMeetupHandler(meetupData){

		fetch('https://react-pro-started-default-rtdb.firebaseio.com/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers:
				{
					'Content-Type': 'application/json'
				}
			}
		).then(() => {

			history.replace('/');
		});
	}
	return(

		<section>
			<h1>Add New Meetup </h1>
			<NewmeetupForm onAddMeetup={addMeetupHandler}/>
		</section>
		);
}

export default NewMeetuppage;