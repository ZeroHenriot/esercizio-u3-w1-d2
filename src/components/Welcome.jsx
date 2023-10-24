import Alert from 'react-bootstrap/Alert';


    const Welcome = (props) =>{
  return (
    <Alert variant="success">
      <Alert.Heading>{props.welcomeMessage}</Alert.Heading>
    </Alert>
  );
}

export default Welcome;