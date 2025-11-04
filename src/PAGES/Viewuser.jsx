import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Button, CircularProgress, Alert } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        setError("User not found");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`https://students-learning-api.onrender.com/api/auth/${id}`);
        console.log(res.data.user);
        setUser(res.data);
        console.log("user response:", res.data)
      } catch (err) {
        console.error(err);
        setError("Failed to load user info");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!user) return <Typography>User Not Found</Typography>;
  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "bisque",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          borderRadius: 3,
          backgroundColor: "navy"
        }}
      >
        <Typography variant="h5" gutterBottom fontWeight="bold" sx={{color: "white"}}>
          User Details
        </Typography>

        <Typography sx={{ mb: 1 }}>
          <b>ID:</b> {user._id}
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <b>Name:</b> {user.firstName} {user.lastName}
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <b>Email:</b> {user.email}
        </Typography>
        <Typography sx={{ mb: 2 }}>
          <b>Phone:</b> {user.phoneNumber || "Not available"}
        </Typography>

        <Button variant="contained" fullWidth onClick={() => navigate(-1)} sx={{background: "brown"}}>
          Back
        </Button>
      </Paper>
    </Box>
  );
};

export default UserDetails;