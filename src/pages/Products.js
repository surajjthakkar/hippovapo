import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Box, 
  useTheme,
  Card,
  CardContent,
  Button,
  Divider,
} from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import CakeIcon from '@mui/icons-material/Cake';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import IcecreamIcon from '@mui/icons-material/Icecream';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useNavigate } from 'react-router-dom';

const FlavorCategory = ({ title, description, flavors, icon }) => {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        height: '100%',
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
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          {icon}
          <Typography 
            variant="h5" 
            component="h3" 
            sx={{ 
              ml: 2,
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary',
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {flavors.map((flavor, index) => (
            <Box key={index}>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: theme.palette.primary.light,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <span style={{ marginRight: '8px' }}>{flavor.emoji}</span>
                {flavor.name}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.secondary',
                  ml: 2,
                }}
              >
                {flavor.description}
              </Typography>
              {index < flavors.length - 1 && (
                <Divider sx={{ mt: 2, opacity: 0.1 }} />
              )}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

const Products = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const categories = [
    {
      title: "Tobacco Blends",
      description: "Premium tobacco flavors for those who appreciate traditional tastes.",
      icon: <SmokingRoomsIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      flavors: [
        { name: "The Duke", description: "Bold Rich American Tobacco", emoji: "🌿" },
        { name: "Cabana", description: "Everyone Likes a Hand Rolled Cigar", emoji: "🌴" },
        { name: "RY4", description: "It's Bange: Tobacco with Vanilla Caramel & Almond", emoji: "🍯" },
        { name: "Tobacco Mix", description: "Three of our Finest Blends", emoji: "🍂" },
        { name: "Turkish Bourbon", description: "Turkish Tobacco, Bourbon", emoji: "🥃" },
        { name: "Turkish", description: "A Smooth Turkish Medium Tobacco", emoji: "🌙" },
        { name: "Ultra Light", description: "A Light Bodied Tobacco", emoji: "🍃" },
        { name: "Western Tobacco", description: "A Traditional Smooth Western, Tobacco, and Blackberry", emoji: "🤠" }
      ]
    },
    {
      title: "Menthol & Cool",
      description: "Refreshing menthol blends for a cool, crisp experience.",
      icon: <AcUnitIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      flavors: [
        { name: "Berry Mint", description: "A Fresh Mix of Berries and Sweet Mint", emoji: "🫐" },
        { name: "Fire & Ice", description: "Hot & Cold", emoji: "🔥" },
        { name: "Menthol", description: "Crisp Strong Menthol", emoji: "❄️" },
        { name: "RY4 + Menthol", description: "Our Finest RY4 Blend Tobacco on ICE", emoji: "🧊" },
        { name: "Screaming Eagle", description: "Mango Forest, Watermelon Strawberry on ICE", emoji: "🦅" },
        { name: "Sir Randy", description: "Smooth Peachy Menthol", emoji: "🍑" },
        { name: "Forbidden Fruit Menthol", description: "Cool Fruity Blend", emoji: "🍎" }
      ]
    },
    {
      title: "Breakfast & Cereals",
      description: "Start your day with these breakfast-inspired flavors.",
      icon: <RestaurantIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      flavors: [
        { name: "Berry Crunch", description: "Yellow Cap is Getting Fruity", emoji: "🥣" },
        { name: "Fruits O's", description: "Circular Cereal with a Fruit Burst", emoji: "🥐" }
      ]
    },
    {
      title: "Drinks & Coffees",
      description: "Refreshing beverage-inspired flavors.",
      icon: <LocalCafeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      flavors: [
        { name: "Alabama Slammer", description: "Southern Whiskey Blend", emoji: "🥃" },
        { name: "Cap'n Coke", description: "Spiced Rum & Cola", emoji: "🥤" },
        { name: "Coffee & Cigarettes", description: "Classic Coffee Blend", emoji: "☕" },
        { name: "The Hanso", description: "Premium Coffee Blend", emoji: "🍵" },
        { name: "Pina Colada", description: "Tropical Coconut Drink", emoji: "🍹" },
        { name: "Sweet Apple", description: "Canadian Whiskey and Crisp Green Apple", emoji: "🍎" }
      ]
    },
    {
      title: "Fruits & Nuts",
      description: "Fresh and natural fruit flavors.",
      icon: <LocalFloristIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      flavors: [
        { name: "Apple", description: "Perfectly Ripe Red Delicious", emoji: "🍎" },
        { name: "RY Berry", description: "Mixed Berries, Blueberry and Cream", emoji: "🫐" },
        { name: "Dragon's Kiss", description: "Strawberry, Juicy Pomegranate, Kiwi, and Melon", emoji: "🐉" },
        { name: "Dragon's Kiss 2", description: "Dragon Fruit, Strawberry, Jackfruit", emoji: "🐲" },
        { name: "Lemon Berry Kiss", description: "Lemon, Mixed Berry & Sour", emoji: "🍋" },
        { name: "Melonious Funk", description: "Mix of Strawberry, Watermelon, and Cantaloupe, with a hint of Cucumber", emoji: "🍈" },
        { name: "Orgy", description: "Delightful Blend of Melon Berry with hint of Apricot", emoji: "🍑" },
        { name: "Peach Tea", description: "Sweet Juicy Peach Tea", emoji: "🫖" },
        { name: "Prickly Pear", description: "Pricklen Pear", emoji: "🌵" },
        { name: "PTSD", description: "Mellow Layering of Six Different Fruits", emoji: "🎯" },
        { name: "Screaming Eagle", description: "Sweet Watermelon Strawberry", emoji: "🦅" },
        { name: "Strawberry Kiwi", description: "A Sweet Mix of Strawberry & Kiwi", emoji: "🍓" },
        { name: "Sweet William", description: "Strawberry, Kiwi, Watermelon, Mango", emoji: "🥝" },
        { name: "Watermelon", description: "Strong Juicy Melon", emoji: "🍉" },
        { name: "West Side", description: "Cranberry Fresh Mango", emoji: "🥭" }
      ]
    },
    {
      title: "Creams & Custards",
      description: "Rich, creamy dessert flavors.",
      icon: <IcecreamIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      flavors: [
        { name: "Banana Cream", description: "Creamy Sweet Banana", emoji: "🍌" },
        { name: "Blackwater", description: "Water Berry Creamy Goodness", emoji: "🌊" },
        { name: "Blue Hippo", description: "Blueberry & Creamy Dessert", emoji: "🦛" },
        { name: "F-YEAH", description: "Cinnamon & Cream", emoji: "✨" },
        { name: "Phin's Juice", description: "Strawberry, Pineapple & Vanilla Swirl & Cream", emoji: "🍍" },
        { name: "PHX", description: "Banana Cream, Orange Cream & Blueberry", emoji: "🦅" },
        { name: "Sensei", description: "Caramel Vanilla Custard", emoji: "🥮" },
        { name: "Strawnana", description: "Strawberries Banana & Cream", emoji: "🍓" },
        { name: "Summer Haze", description: "Peaches & Cream, Jackfruit, Strawberries, & Coconut", emoji: "🌞" },
        { name: "Summer Haze + Coconut", description: "Peaches & Cream, Strawberries & Cream Combined with Coconut", emoji: "🥥" },
        { name: "Summer Haze + Jackfruit", description: "Peaches & Cream, Strawberries & Coconut Combined with Jackfruit", emoji: "🌴" },
        { name: "Vanilla Custard", description: "Creamy Vanilla Custard", emoji: "🍮" }
      ]
    },
    {
      title: "Desserts & Candy",
      description: "Sweet treats and candy-inspired flavors.",
      icon: <CakeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      flavors: [
        { name: "Andesing", description: "Shocking Ladder with Andes Mint", emoji: "🍫" },
        { name: "Angry Hobbits", description: "A Spicy Cinnamon Gumball with Apple & Pears", emoji: "🧙" },
        { name: "Big Daddy", description: "Chewy Sour Candy", emoji: "🍬" },
        { name: "Big Red 2", description: "Cinnamon Hot Mint Candy", emoji: "🔥" },
        { name: "Bubba Dubb", description: "Bubble Gum with Strawberry", emoji: "🫧" },
        { name: "The Chemist", description: "Chewy Strawberry Blend", emoji: "🧪" },
        { name: "Cotton Candy", description: "Pink Puffy Deliciousness", emoji: "🍭" },
        { name: "C4", description: "Creamy Peppermint with hints of Chocolate", emoji: "💣" },
        { name: "Drunken Chocolate", description: "Caramel Bourbon Chocolate", emoji: "🥃" },
        { name: "Fat Elvis", description: "Banana, Peanut Butter, Bacon & Honey", emoji: "👑" },
        { name: "Gummy Yummy", description: "Strawberry Chewy Goodness", emoji: "🐻" },
        { name: "JR Grape", description: "Grape Hardy Candy", emoji: "🍇" },
        { name: "JR Sour Apple", description: "Sour Apple Hard Candy", emoji: "🍏" },
        { name: "Key Lime Cheesecake", description: "Creamy Tart & Lime Zest", emoji: "🥧" },
        { name: "Mama's Mint", description: "A Kool Mint Candy", emoji: "🌿" },
        { name: "Milk & Honey", description: "Leica Mist", emoji: "🍯" },
        { name: "Peachy O's", description: "Creamy Peach Candy Cans", emoji: "🍑" },
        { name: "Peppy Mint", description: "A Sweet Peppermint Burst", emoji: "🌱" },
        { name: "Redy Hots", description: "Cinnamon Fire", emoji: "🌶️" },
        { name: "Skiddles", description: "Candy Ball", emoji: "🌈" },
        { name: "Strawberry Cheesecake", description: "Creamy Cheesecake with a graham cracker", emoji: "🍰" },
        { name: "Yeast Infection", description: "Sugar Cookie", emoji: "🍪" }
      ]
    }
  ];

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
            Discover Your Flavor: Premium E-Liquids & Hardware
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              color: 'text.secondary',
              lineHeight: 1.6,
            }}
          >
            Explore our extensive collection of premium e-liquids. All flavors available in 3%, 6%, and 12% nicotine levels.
          </Typography>
        </Container>
      </Box>

      {/* Product Categories */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FlavorCategory 
                title={category.title}
                description={category.description}
                flavors={category.flavors}
                icon={category.icon}
              />
            </Grid>
          ))}
        </Grid>

        {/* Hardware Section */}
        <Box sx={{ mt: 8 }}>
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
              <Grid item xs={12} md={8}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <DevicesOtherIcon sx={{ fontSize: 40, color: theme.palette.secondary.main, mr: 2 }} />
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: { xs: '1.8rem', md: '2.5rem' },
                      color: theme.palette.secondary.main,
                    }}
                  >
                    Devices, Mods, Pods & Accessories
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  Find the perfect device to match your style and needs. We carry a range of starter kits, 
                  advanced mods, sleek pod systems, tanks, coils, batteries, chargers, and all the accessories you need.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Quality Assurance */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <VerifiedIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
            <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
              Quality Assurance
            </Typography>
          </Box>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              mb: 4,
            }}
          >
            We prioritize quality and safety, stocking products from reputable manufacturers. 
            Ask our staff for recommendations!
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => navigate('/contact')}
            sx={{ 
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #8AB4F8 30%, #6494E8 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #6494E8 30%, #4A7ED8 90%)',
              },
            }}
          >
            Visit Us Today
          </Button>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              mt: 4,
              fontStyle: 'italic',
            }}
          >
            New arrivals weekly! Visit Hippo Vapo in Hutto to see our full, up-to-date selection.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Products; 