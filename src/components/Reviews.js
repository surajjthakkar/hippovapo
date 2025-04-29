import React from 'react';
import { Box, Card, Typography, Avatar, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

// Sample reviews data - replace with actual data from Google/Facebook
const reviews = [
  {
    id: 1,
    name: "Wesley Cp",
    role: "Local Guide",
    image: "/avatars/avatar1.jpg",
    text: "Excellent service, was new to vaping and basically gave me step by step instructions. Highly recommended",
    source: "Facebook"
  },
  {
    id: 2,
    name: "Cory Criss",
    role: "Verified Customer",
    image: "/avatars/avatar2.jpg",
    text: "Amazing customer experience I’ll definitely come back!!!",
    source: "Facebook"
  },
  {
    id: 3,
    name: "Robert Fox",
    role: "Local Guide",
    image: "/avatars/avatar3.jpg",
    text: "Best vape shop in Hutto! The staff is incredibly knowledgeable and helped me find the perfect setup.",
    source: "Facebook"
  },
  {
    id: 4,
    name: "Ygr P",
    role: "Verified Customer",
    image: "/avatars/avatar4.jpg",
    text: "Went in yesterday for the first time. Great shop run by vets who are knowledgeable. Great customer service. Been vaping for years just found my new shop",
    source: "Google Reviews"
  },
  // Duplicate reviews to create continuous scroll effect
  {
    id: 5,
    name: "Jason Dere",
    role: "Local Guide",
    image: "/avatars/avatar1.jpg",
    text: "Great service and great selection for all your vaping needs",
    source: "Google Reviews"
  },
  {
    id: 6,
    name: "Melissa Rogers",
    role: "Verified Customer",
    image: "/avatars/avatar2.jpg",
    text: "I had a very positive experience here! They were very friendly, and went out of their way to help me. The priced were fair, and their liquids are good",
    source: "Google Reviews"
  }
];

// Define scroll animations
const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const ReviewCard = ({ review, isAlternate }) => {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 350,
        mx: 2,
        p: 3,
        height: '100%',
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${
          isAlternate 
            ? 'rgba(242, 139, 130, 0.05) 100%)'
            : 'rgba(138, 180, 248, 0.05) 100%)'
        }`,
        border: '1px solid',
        borderColor: isAlternate 
          ? 'rgba(242, 139, 130, 0.1)'
          : 'rgba(138, 180, 248, 0.1)',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          fontSize: '1.1rem',
          lineHeight: 1.6,
          flex: 1,
          color: 'text.secondary',
        }}
      >
        "{review.text}"
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src={review.image}
          alt={review.name}
          sx={{ 
            width: 48, 
            height: 48,
            bgcolor: isAlternate ? 'secondary.main' : 'primary.main',
          }}
        >
          {review.name[0]}
        </Avatar>
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {review.name}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: isAlternate ? 'secondary.main' : 'primary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {review.source}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

const ScrollingReviews = ({ direction = 'left' }) => {
  const scrollAnimation = direction === 'left' ? scrollLeft : scrollRight;
  const isAlternate = direction === 'right';

  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'hidden',
        position: 'relative',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          width: '100px',
          height: '100%',
          zIndex: 2,
        },
        '&::before': {
          left: 0,
          background: `linear-gradient(to right, ${useTheme().palette.background.default}, transparent)`,
        },
        '&::after': {
          right: 0,
          background: `linear-gradient(to left, ${useTheme().palette.background.default}, transparent)`,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          animation: `${scrollAnimation} 40s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {reviews.map((review) => (
          <ReviewCard 
            key={review.id} 
            review={review} 
            isAlternate={isAlternate}
          />
        ))}
      </Box>
    </Box>
  );
};

const Reviews = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography 
        variant="h3" 
        component="h2" 
        align="center" 
        gutterBottom
        sx={{ 
          mb: 6,
          background: 'linear-gradient(45deg, #8AB4F8 30%, #F28B82 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        What Our Customers Say
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <ScrollingReviews direction="left" />
      </Box>
      
      <Box>
        <ScrollingReviews direction="right" />
      </Box>
    </Box>
  );
};

export default Reviews; 