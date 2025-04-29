import React from 'react';
import { Container, Typography, Grid, Paper, Box, useTheme } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';

const About = () => {
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
            Our Story: Service, Community, and Quality Vapes
          </Typography>
        </Container>
      </Box>

      {/* Photo Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Paper
              sx={{
                p: 2,
                height: 400,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(138, 180, 248, 0.1) 100%)`,
                border: '1px solid',
                borderColor: 'rgba(138, 180, 248, 0.2)',
              }}
            >
              <Typography variant="h6" color="text.secondary" align="center">
                [Owner 1 Photo]
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              sx={{
                p: 2,
                height: 400,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(242, 139, 130, 0.1) 100%)`,
                border: '1px solid',
                borderColor: 'rgba(242, 139, 130, 0.2)',
              }}
            >
              <Typography variant="h6" color="text.secondary" align="center">
                [Owner 2 Photo]
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography 
              variant="h6" 
              align="center" 
              color="text.secondary"
              sx={{ mt: 2 }}
            >
              Meet [Owner 1 Name] and [Owner 2 Name], founders of Hippo Vapo
            </Typography>
          </Grid>
        </Grid>

        {/* Our Journey Section */}
        <Box sx={{ py: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(138, 180, 248, 0.1) 100%)`,
              border: '1px solid',
              borderColor: 'rgba(138, 180, 248, 0.2)',
              borderRadius: 4,
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
                  From Service Members to Small Business Owners
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  We are [Owner 1 Name] and [Owner 2 Name], proud U.S. Army veterans and the founders of Hippo Vapo. 
                  After serving our country, we wanted to build something meaningful right here in the Hutto community 
                  we call home. Our time in the military taught us the importance of discipline, attention to detail, 
                  and commitment – values we now pour into our business.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <MilitaryTechIcon sx={{ fontSize: '120px', color: theme.palette.primary.main }} />
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Our Mission Section */}
        <Box sx={{ py: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(242, 139, 130, 0.1) 100%)`,
              border: '1px solid',
              borderColor: 'rgba(242, 139, 130, 0.2)',
              borderRadius: 4,
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <PublicIcon sx={{ fontSize: '120px', color: theme.palette.secondary.main }} />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography 
                  variant="h3" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    color: theme.palette.secondary.main,
                  }}
                >
                  Why Hippo Vapo?
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  We saw a need in Hutto for a vape shop that wasn't just about selling products, but about 
                  providing genuine expertise, a welcoming environment, and a focus on quality and safety. 
                  We believe in offering a curated selection of reliable devices and exceptional e-liquids 
                  that we stand behind. Our mission is to be more than just a store; we aim to be a trusted 
                  resource for the local vaping community.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Community Focus Section */}
        <Box sx={{ py: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 6,
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, rgba(138, 180, 248, 0.1) 100%)`,
              border: '1px solid',
              borderColor: 'rgba(138, 180, 248, 0.2)',
              borderRadius: 4,
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
                  Rooted in Hutto
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  Being part of the Hutto community is important to us. We're dedicated to providing friendly 
                  service, building relationships with our customers, and contributing positively to our town. 
                  Thank you for supporting our veteran-owned small business!
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <PeopleIcon sx={{ fontSize: '120px', color: theme.palette.primary.main }} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 