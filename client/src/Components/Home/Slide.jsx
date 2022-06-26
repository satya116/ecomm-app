import { Box, Typography, styled } from '@mui/material';

import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Image = styled('img')({
    width: 'auto',
    height: '65%'
})



const MultiSlide = ({ data, title }) => {

    return (
        <Box style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 22, }} >
                {
                    data.map(temp => (
                        <Link key={temp.id} to={`product/${temp.id}`} style={{textDecoration: 'none'}}>
                            <Box textAlign="center" style={{ padding: '25px 15px', height: 333, width: 280,  border: "1px solid var(--primary-theme-color)" }}>
                                <Image src={temp.url} />
                                <Typography style={{ fontWeight: 600, color: '#212121' }}>{temp.title.shortTitle}</Typography>
                                <Typography style={{ color: 'green' }}>{temp.discount}</Typography>
                                <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography style={{ color: '#212121', opacity: '.6' }}>{temp.tagline}</Typography>
                                <Typography>

                                    Price:
                                    {
                                        temp.price.cost
                                    }
                                </Typography>
                                </Box>
                            </Box>
                        </Link>
                    ))
                }
        </Box>
    )
}

const Slide = (props) => {
    return (
        <>
            {
                props.multi === true && <MultiSlide {...props} />
            }
        </>
    )
}

export default Slide;