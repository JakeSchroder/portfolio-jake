import { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Reaptcha from "reaptcha";

export default function MessageForm() {
  const [open, setOpen] = useState(false); //Pass down this variable from the home page
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      message: "",
    });
  };

  //reCAPTCHA state functions
  const [verified, setVerified] = useState(false);
  const onVerify = (recaptchaResponse) => {
    setVerified(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        sx={{ borderRadius: 28 }}
      >
        <b>Contact</b>
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>Send me a message!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you'd like to contact me about an opportunity then please fill
            out these boxes. I will be sent a message with all of the details!
          </DialogContentText>
          <Grid container justifyContent="space-between">
            <Grid item>
              <TextField
                autoFocus
                margin="dense"
                id="firstName"
                label="First Name"
                type="firstName"
                variant="outlined"
                color="primary"
                {...register("firstName", {
                  required: true,
                  maxLength: 40,
                  type: "firstName",
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
            </Grid>
            <Grid item>
              <TextField
                autoFocus
                margin="dense"
                id="lastName"
                label="Last Name"
                type="lastName"
                variant="outlined"
                color="primary"
                {...register("lastName", {
                  required: true,
                  maxLength: 40,
                  type: "lastName",
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
            </Grid>
            <Grid item>
              <TextField
                autoFocus
                margin="dense"
                id="company"
                label="Company"
                type="company"
                variant="outlined"
                color="primary"
                {...register("company", {
                  required: true,
                  maxLength: 50,
                  type: "text",
                  pattern: /^[A-Za-z]+$/i,
                })}
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
                color="primary"
                {...register("email", {
                  required: true,
                  maxLength: 320,
                  type: "email",
                  pattern: /^[A-Za-z!#$%&'*+-/=?^_`{|@]+$/i,
                })}
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
            variant="outlined"
            color="primary"
            multiline
            maxRows={50}
            {...register("message", {
              required: true,
              maxLength: 500,
              type: "text",
            })}
          />
        </DialogContent>
        <DialogActions>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Grid item xs={12} justifyContent="center" alignItems="center">
              <Reaptcha
                sitekey="Your reCAPTCHA v2 API key"
                onVerify={onVerify}
              />
            </Grid>
            <Grid item sx={{ marginTop: 4 }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClose}
                sx={{ marginRight: 5 }}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleSubmit(onSubmit)}
                disabled={!verified}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}
