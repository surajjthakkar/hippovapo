import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  Box, 
  Button,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Reviews from '../components/Reviews';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(45deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(138, 180, 248, 0.1) 0%, rgba(138, 180, 248, 0) 70%)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ py: 8 }}>
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  background: 'linear-gradient(45deg, #8AB4F8 30%, #F28B82 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hippo Vapo: Level Up Your Vape Experience in Hutto
              </Typography>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 4, 
                  color: 'text.secondary',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Premium Vapes, Expert Service, Locally Owned
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  onClick={() => navigate('/products')}
                  sx={{ 
                    fontSize: '1.1rem',
                    background: 'linear-gradient(45deg, #8AB4F8 30%, #6494E8 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #6494E8 30%, #4A7ED8 90%)',
                    },
                  }}
                >
                  Explore Flavors
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  onClick={() => navigate('/contact')}
                  sx={{ 
                    fontSize: '1.1rem',
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      borderColor: theme.palette.primary.light,
                      background: 'rgba(138, 180, 248, 0.08)',
                    },
                  }}
                >
                  Visit Us Today
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Intro Section */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' },
            background: 'linear-gradient(45deg, #8AB4F8 30%, #F28B82 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 4,
          }}
        >
          Welcome to Hutto's Home for Vaping
        </Typography>
        <Typography 
          variant="h5" 
          align="center" 
          color="text.secondary" 
          sx={{ 
            maxWidth: '800px', 
            mx: 'auto', 
            mb: 12,
            lineHeight: 1.6,
          }}
        >
          Right here in Hutto, Hippo Vapo is your friendly, neighborhood source for top-quality vaping products 
          and knowledgeable support. We're passionate about providing a curated selection of the latest devices, 
          mods, pods, and an incredible range of e-liquid flavors to suit every preference. Whether you're new 
          to vaping or a seasoned enthusiast, we're here to help you find exactly what you need.
        </Typography>

        {/* Veteran-Owned Section */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: 6, 
            mb: 12, 
            background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(138, 180, 248, 0.1) 100%)`,
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'rgba(138, 180, 248, 0.2)',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  color: theme.palette.primary.main,
                }}
              >
                Proudly Veteran-Owned & Locally Operated
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Hippo Vapo isn't just another vape shop; we're a small business built with dedication 
                and a commitment to our Hutto community. As proud Army veterans, we bring the values of 
                service, integrity, and quality to everything we do. Choosing Hippo Vapo means you're 
                supporting a local, veteran-owned business, and we genuinely appreciate your support!
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <MilitaryTechIcon sx={{ fontSize: '120px', color: theme.palette.primary.main }} />
            </Grid>
          </Grid>
        </Paper>

        {/* Highlights Section */}
        <Grid container spacing={4} sx={{ mb: 12 }}>
          {[
            {
              icon: <LocalFloristIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
              title: 'Incredible Flavor Selection',
              description: 'Discover your next all-day vape from our vast range.',
            },
            {
              icon: <BuildIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
              title: 'Expert Help & Repairs',
              description: "Need advice or a fix? We've got the know-how.",
            },
            {
              icon: <PeopleIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
              title: 'Your Local Vape Hub',
              description: 'Friendly service and a welcoming atmosphere.',
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  p: 4, 
                  textAlign: 'center',
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(138, 180, 248, 0.05) 100%)`,
                  border: '1px solid',
                  borderColor: 'rgba(138, 180, 248, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(138, 180, 248, 0.3)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {feature.icon}
                <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 2, color: theme.palette.primary.main }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Reviews Section */}
        <Reviews />

        {/* Call to Action Section */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            py: 8, 
            px: 4,
            background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(242, 139, 130, 0.1) 100%)`,
            borderRadius: 4,
            border: '1px solid',
            borderColor: 'rgba(242, 139, 130, 0.2)',
          }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '2rem', md: '3rem' },
              background: 'linear-gradient(45deg, #F28B82 30%, #8AB4F8 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ready to Find Your Perfect Vape?
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              mb: 4, 
              maxWidth: '600px', 
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Stop by our Hutto shop today to browse our selection, chat with our knowledgeable team, 
            and experience the Hippo Vapo difference.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate('/contact')}
            sx={{ 
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #F28B82 30%, #D27067 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #D27067 30%, #B25147 90%)',
              },
            }}
          >
            Get Directions
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 