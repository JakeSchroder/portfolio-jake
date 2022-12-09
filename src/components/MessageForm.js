import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MessageForm() {
  const [open, setOpen] = React.useState(false);//Pass down this variable from the home page

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Contact
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='sm'>
        <DialogTitle>Send me a message!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you'd like to contact me about an opportunity then please fill out these boxes. 
            I will be sent an email with all of the details!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Name"
            type="name"
            variant="outlined"
            color='secondary'
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Your Email"
            type="email"
            variant="outlined"
            color='secondary'
          />
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            variant='outlined'
            color='secondary'
            multiline
            rows={10}
            maxRows={50}
          />
        </DialogContent>
        <DialogActions>
          <Button color='secondary' onClick={handleClose}>Cancel</Button>
          <Button color='secondary' onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}