import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Box,
  useTheme,
} from '@mui/material';
import ConsultationIcon from '@mui/icons-material/Help';
import MaintenanceIcon from '@mui/icons-material/Build';
import MixingIcon from '@mui/icons-material/Science';
import EducationIcon from '@mui/icons-material/School';

const services = [
  {
    title: 'Product Consultation',
    description: 'Expert advice on choosing the right vaping products for your needs.',
    icon: <ConsultationIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Device Maintenance',
    description: 'Professional cleaning and maintenance services for your vaping devices.',
    icon: <MaintenanceIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Custom E-Liquid Mixing',
    description: 'Create your perfect blend with our custom e-liquid mixing service.',
    icon: <MixingIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Vape Education',
    description: 'Learn about vaping safety, proper usage, and maintenance.',
    icon: <EducationIcon sx={{ fontSize: 40 }} />,
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: 12,
          pb: 6,
          background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h1" 
            component="h1" 
            align="center"
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 2,
              background: 'linear-gradient(45deg, #8AB4F8 30%, #F28B82 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Services
          </Typography>
          
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            We offer a range of services to enhance your vaping experience
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(138, 180, 248, 0.1) 100%)`,
                  border: '1px solid',
                  borderColor: 'rgba(138, 180, 248, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(138, 180, 248, 0.4)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 3,
                    color: theme.palette.primary.main
                  }}>
                    {service.icon}
                    <Typography 
                      variant="h4" 
                      component="h2"
                      sx={{ 
                        ml: 2,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body1"
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ 
                      background: 'linear-gradient(45deg, #8AB4F8 30%, #6494E8 90%)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #6494E8 30%, #4A7ED8 90%)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 3,
              color: theme.palette.primary.main,
            }}
          >
            Need Assistance?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
            Our experienced team is here to help with all your vaping needs. Visit our store or contact us for personalized service.
          </Typography>
          <Button 
            variant="outlined"
            size="large"
            sx={{ 
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              '&:hover': {
                borderColor: theme.palette.primary.light,
                background: 'rgba(138, 180, 248, 0.08)',
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 