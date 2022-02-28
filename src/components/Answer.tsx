import Button from '@mui/material/Button';

type Prop = {
  content: string;
}

const Answer = (props: Prop): JSX.Element => {
  return(
    <Button variant="contained">
      {props.content}
    </Button>
  );
}

export default Answer;