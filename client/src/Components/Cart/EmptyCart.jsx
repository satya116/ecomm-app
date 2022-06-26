
import { Typography, Box, styled } from '@mui/material';

const Component = styled(Box)`
    width: 80%%;
    height: 65vh;
    background: #fff;
    margin: 80px 140px;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 70px;
`;

const EmptyCart = () => {

    return (
        <Component>
            <Container>
                <Typography>Your cart is empty!</Typography>
            </Container>
        </Component>
    )
}

export default EmptyCart;