import { useState} from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

export default function MessageForm() {
  const [open, setOpen] = useState(false);//Pass down this variable from the home page

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