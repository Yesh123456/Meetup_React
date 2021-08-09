import {useRef} from 'react';
import Card from '../ui/Card';
import classes from './NewmeetupForm.module.css';

function NewmeetupForm(props){

	const titleInput = useRef();
	const imageInput = useRef();
	const addressInput = useRef();
	const descriptionInput = useRef();
	
	function submitHandler(event){

		event.preventDefault();
		const enteredTitle = titleInput.current.value;
		const enteredImage = imageInput.current.value;
		const enteredAddress = addressInput.current.value;
		const enteredDescription = descriptionInput.current.value;

		const meetupData = {
			title : enteredTitle,
			image : enteredImage,
			address : enteredAddress,
			description : enteredDescription,
		}

		props.onAddMeetup(meetupData);
	}
	return(
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>MeetUp Title</label>
					<input type="text" id="title" ref={titleInput} required />
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>MeetUp Image</label>
					<input type="url" id="image" ref={imageInput} required />
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>MeetUp Address</label>
					<input type="text" id="address" ref={addressInput} required />
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>MeetUp Description</label>
					<textarea id="description" required rows='5' ref={descriptionInput}></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>  
			</form>
		</Card>
		);
}

export default NewmeetupForm;