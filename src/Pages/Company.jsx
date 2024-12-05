import React from 'react';
import { Box } from '@mui/material';
import CompanyBox from '../components/company/CompanyBox.jsx'
import Certification from '../Pages/Certifications.jsx'
import PartnerBox from '../components/company/PartnerBox.jsx'
import PricingBox from '../components/company/PricingBox.jsx'


const Company = () =>{
    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    minHeight: '46.88vw',
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: 'black',
                }}
            >
                <CompanyBox />
            </Box>
            {/* <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '200px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <VideoBox />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '200px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <CertificationBox />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '200px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <PartnerBox />
            </Box> */}
            <Box
                sx={{
                    width: '100%',
                    height:'100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <PricingBox />
            </Box>



            <Certification />
            


        </Box>
    );
}

export default Company