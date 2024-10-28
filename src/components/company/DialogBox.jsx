import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  IconButton,
  Box,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

// Define the theme constants
const theme = createTheme({
  typography: {
    h6: {
      fontFamily: 'Lato',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '20px',
    },
    body1: {
      fontFamily: 'Lato',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '14px',
      color: 'rgba(255, 255, 255, 0.7)',
    },
    featureText: {
      fontFamily: 'Lato',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '19.2px',
      color: '#FFFFFF',
    },
  },
  palette: {
    primary: {
      main: '#B50304',
    },
    background: {
      paper: '#262626',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
      divider: '#FFFFFF26',
    },
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '15px',
          maxWidth: '528px',
          overflow: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: '#B50304',
        },
        containedPrimary: {
          backgroundColor: '#B50304',
          '&:hover': {
            backgroundColor: '#8f0203',
          },
        },
      },
    },
  },
});

const FeaturesDialog = () => {
  const [open, setOpen] = useState(false);
  const [features, setFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState(["Geo tracking"]);

  useEffect(() => {
    // Assume features are already predefined in component or add initial setup here
    setFeatures([
      "Select all",
      "Geo tracking",
      "Remote patient monitoring",
      "Staff management",
      "Electronic document management",
      "Feedback",
      "Adverse event reporting",
      "Video consultation",
      "Site management",
    ]);
  }, []);

  const handleFeatureToggle = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const handleSelectAll = () => {
    setSelectedFeatures(
      selectedFeatures.length === features.length - 1 ? [] : features.slice(1)
    );
  };

  const handleSubmit = () => {
    const payload = {
      geo_tracking: selectedFeatures.includes("Geo tracking"),
      remote_patient_monitoring: selectedFeatures.includes("Remote patient monitoring"),
      staff_management: selectedFeatures.includes("Staff management"),
      electronic_document_management: selectedFeatures.includes("Electronic document management"),
      feedback: selectedFeatures.includes("Feedback"),
      adverse_event_reporting: selectedFeatures.includes("Adverse event reporting"),
      video_consultation: selectedFeatures.includes("Video consultation"),
      site_management: selectedFeatures.includes("Site management"),
    };

    axios
      .post('https://site.vitruvianshield.com/api/v1/feature-req', payload)
      .then((response) => {
        console.log("Features submitted successfully:", response.data);
        setOpen(false); // Close dialog on success
      })
      .catch((error) => {
        console.error("Error submitting features:", error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
        }}
        variant="outlined"
        onClick={() => setOpen(true)}
      >
        Buy
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogContent dividers sx={{ backgroundColor: theme.palette.background.paper }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <IconButton
              aria-label="close"
              onClick={() => setOpen(false)}
              sx={{
                color: '#FFFFFF',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ padding: 1.5 }}>
            <Box component="span" sx={{ typography: 'h6' }}>
              Features
            </Box>

            <Box sx={{ typography: 'body1', marginBottom: 2, marginTop: 2 }}>
              Select the features you want
            </Box>
            {features.map((feature, index) => (
              <React.Fragment key={feature}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        feature === "Select all"
                          ? selectedFeatures.length === features.length - 1
                          : selectedFeatures.includes(feature)
                      }
                      onChange={() =>
                        feature === "Select all" ? handleSelectAll() : handleFeatureToggle(feature)
                      }
                      sx={{
                        color: theme.palette.text.secondary,
                        '&.Mui-checked': {
                          color: theme.palette.primary.main,
                        },
                        '&:hover': {
                          backgroundColor: 'transparent', // Removes the hover background
                        },
                      }}
                    />
                  }
                  label={feature}
                  sx={{
                    display: 'block',
                    marginBottom: 1,
                    '& .MuiFormControlLabel-label': {
                      typography: 'featureText',
                    },
                  }}
                />
                {index < features.length - 1 && (
                  <hr style={{ borderColor: theme.palette.text.divider, margin: '8px 0' }} />
                )}
              </React.Fragment>
            ))}
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button 
            onClick={handleSubmit} 
            variant="contained" 
            color="primary"
            sx={{
              width: '90%', // Fixed width
              minHeight: '50.82px', // Fixed height
              textTransform: 'none', // Prevents uppercase
              gap: '8px',
              mb: 4,
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default FeaturesDialog;