import { Button } from "react-bootstrap";

const SubmitButton = ({ label="Submit", variant="primary", name }) => {
	
	return (
			<Button type="submit" className="m-3" id={`${name}-btn`} variant={variant}> {label} </Button>
	);
}

export default SubmitButton;