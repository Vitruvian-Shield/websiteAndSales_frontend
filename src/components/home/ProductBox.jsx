import React, { useState } from 'react';
import { Typography, Button, Box, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import pro1 from "../../assets/mobileart.png";
import pro2 from "../../assets/watchart.png";
import pro3 from "../../assets/laptopart.png";
import nextarrow from "../../assets/rightArrow-1.png";
import previousarrow from "../../assets/leftArrow.png";


const navItemStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '14.22px', lg: '16px' },
    color: '#eee',
    fontStyle: 'normal',
    lineHeight: '100%',
    textTransform: 'none'
}

const proItems = [
    {
        id: '1',
        title: "The Mobile Application",
        image: pro1,
        url: '/products/mobile-app',
        description: "Experience a seamless and user-friendly way to share your health data with all the professionals responsible for your aftercare and medical follow-up.",
        imageWidth: '120%',
        right: '-9.5%',
        bottom: '10%'
    },
    {
        id: '2',
        title: "Vitruvian Shield Smart Watch",
        image: pro2,
        url: '/products/smart-watch',
        description: "Equipped with a vast range of state of the art sensors, the Vitruvian Shield Smartwatch collects biometric data from the wearer",
        imageWidth: '90%',
        right: '0%',
        bottom: '15%'
    },
    {
        id: '3',
        title: "The Web Application",
        image: pro3,
        url: '/products/dashboard',
        description: "This Web App allows healthcare providers and researchers to analyze, manage and monitor their patients' health data in real time.",
        imageWidth: '120%',
        right: '-9.5%',
        bottom: '10%'
    }
];

const ProductBox = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateKey, setAnimateKey] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % proItems.length);
        setAnimateKey((prevKey) => prevKey + 1);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + proItems.length) % proItems.length);
        setAnimateKey((prevKey) => prevKey + 1);
    };

    const handleProductClick = (index) => {
        setCurrentIndex(index);
        setAnimateKey((prevKey) => prevKey + 1);
    };

    const handleSeeProductsClick = () => {
        const currentProduct = proItems[currentIndex];
        window.location.href = currentProduct.url;
    };

    return (
        <Box>
            <Box sx={{
                boxSizing: 'border-box',
                height: { xs: '500px', sm: '450px', md: '536px' },
                pb: { xs: '20px', md: '56px' },
                px: { xs: '20px', sm: '75px', md: '100px', lg: '156px', xl: '180px' },
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

            }}>
                <Box
                    key={animateKey}
                    sx={{
                        width: { xs: '210px', sm: '270px', md: '335px', lg: '430px', xl: '530px' },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 1, sm: 0.8, md: 0.8, lg: 1, xl: 1, },
                    }}>
                    <Typography sx={{
                        ...navItemStyle,
                        fontSize: { xs: '18px', sm: '18px', md: '20px', lg: '26px', xl: '28px' },
                        fontWeight: 600,
                        color: '#fff',
                        animation: 'fadeLeft 0.8s ease-in-out',
                        mb: '12px',
                    }}>
                        {proItems[currentIndex].title}
                    </Typography>

                    <Typography sx={{
                        ...navItemStyle,
                        width: '100%',
                        animation: 'fadeLeft 0.7s ease-in-out',
                        lineHeight: 'normal',
                        fontWeight: 400,
                        mb: '32px'
                    }}>
                        {proItems[currentIndex].description}
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ gap: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 3, } }}>
                        {proItems.map((item, index) => (
                            <Box
                                key={item.id}
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    width: { xs: '80px', sm: '100px', md: '110px', lg: '120px', xl: '120px' },
                                    height: { xs: '70px', sm: '90px', md: '100px', lg: '110px', xl: '104px' },
                                    background: `linear-gradient(180deg, #232323 0%, #343434 100%)`,
                                    backgroundSize: '100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '8px',
                                    boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.25)',
                                    cursor: 'pointer',
                                    opacity: currentIndex === index ? '1' : '0.6',
                                    animation: currentIndex === index ? 'borderExpand 0.5s ease' : 'none',
                                    display: 'flex',
                                    transition: 'border 0.2s ease',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2, },
                                    '@keyframes borderExpand': {
                                        '0%': {
                                            borderWidth: '1px',
                                            borderOpacity: 0,
                                        },
                                        '50%': {
                                            borderWidth: '4px',
                                            borderOpacity: 1,
                                        },
                                        '100%': {
                                            borderWidth: '1px',
                                            borderOpacity: 0,
                                        },
                                    },
                                    ":hover": {
                                        opacity: '1'
                                    }
                                }}
                                onClick={() => handleProductClick(index)}
                            >
                                <Box sx={{
                                    backgroundImage: `url(${item.image})`,
                                    width: '85%',
                                    height: '85%',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }} />
                            </Box>
                        ))}
                    </Box>

                    <Button
                        variant="contained"
                        sx={{
                            mt: { xs: '12px', sm: '20px', md: '32px' },
                            fontFamily: 'Lato',
                            borderRadius: '4px',
                            color: '#fcfcfc',
                            fontWeight: 600,
                            fontSize: { xs: '12.64px', sm: '14px' },
                            backgroundColor: '#B50304',
                            textTransform: 'none',
                            width: { xs: '138px' },
                            height: { xs: '42px' },
                            '&:hover': {
                                backgroundColor: '#B50304',
                                opacity: '0.8'
                            },
                        }}
                        disableRipple
                        onClick={handleSeeProductsClick}
                    >
                        View Products
                    </Button>
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        flexDirection: 'column',
                        width: { xs: '150px', sm: '200px', md: '300px', lg: '336px', xl: '336px' },
                        height: { xs: '314px', sm: '364px', md: '464px', lg: '480px', xl: '480px' },
                        display: 'flex',
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            borderRadius: '0 0 16px 16px',
                            background: "linear-gradient(180deg, rgba(20, 20, 20, 0.06) 0%, rgba(256, 0, 0, 0.09) 25%, rgba(256, 0, 0, 0.36) 99%)",
                            zIndex: 3,
                        }}
                    >
                        <Box
                            key={animateKey}
                            component="img"
                            src={proItems[currentIndex].image}
                            sx={{
                                position: 'absolute',
                                right: proItems[currentIndex].right,
                                bottom: proItems[currentIndex].bottom,
                                width: proItems[currentIndex].imageWidth, 
                                zIndex: 2,
                                animation: `fadeLeft 0.7s ease`,
                            }}
                        />

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                position: "absolute",
                                bottom: '5%',
                                right: '42%',
                                gap: '16px',
                                zIndex: 3,
                            }}


                        >
                            <IconButton
                                onClick={handlePrev}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },

                                }}
                            >
                                <img src={previousarrow} alt="Previous"
                                    style={{
                                        width: '24px',
                                        position: "absolute",
                                    }} />
                            </IconButton>
                            <IconButton
                                onClick={handleNext}
                                sx={{
                                    '&:hover': { backgroundColor: 'transparent' },
                                }}
                            >
                                <img src={nextarrow} alt="Next" style={{ width: '24px', position: "absolute" }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

            </Box>
            {/* Mobile */}
            <Box sx={{
                width: '100%',
                display: { xs: 'flex', sm: 'none' },
                justifyContent: 'center',
                alignItems:'center',
                flexDirection: 'row',
                gap: '16px',
            }}>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    width: '90%',
                }}>
                    {proItems.map((item, index) => (
                    <Box key={item.id} sx={{
                        width: '100px',
                        height: '100px',
                        m: '16px 0px 16px 0px',
                        textAlign: 'center',
                        background: 'linear-gradient(180deg, #232323 0%, #343434 100%)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <a href={item.url} style={{ textDecoration: 'none' }}>
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    mt: index === 0 || index === 2 ? 1 : 1.5,
                                    width: index === 0 || index === 2 ? '90%' : '70%',
                                    height: 'auto',
                                }}
                            />
                        </a>
                    </Box>
                ))}

                </Box>
            </Box>

            <style>
                {`
    @keyframes fadeLeft {
      0% {
        opacity: 0;
        transform: translateX(15%);
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); 
      }

      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `}
            </style>
        </Box >
    );
};

export default ProductBox;
