import { useState} from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid} from '@mui/material';

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
          <Grid container justifyContent='space-between'>
            <Grid item>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                variant="outlined"
                color='primary'
              />
            </Grid>
            <Grid item>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                color='primary'
              />
            </Grid>
          </Grid>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            variant='outlined'
            color='primary'
            multiline
            rows={10}
            maxRows={50}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='primary' onClick={handleClose}>Send</Button>
          <Button variant='outlined' color='primary' onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}