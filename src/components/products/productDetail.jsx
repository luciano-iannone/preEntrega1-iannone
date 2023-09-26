import { Card, CardContent, Grid, Typography } from "@mui/material";
import productInfo from "./productInfo";
import { useState } from "react";

const productDetail = ({ product, children }) => {
    const { id, image, title, price, itHadDues, isAnOffer, stock } = product
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected((prev) => !prev)
    }

    return (<>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="card-products-container" onClick={handleClick}>
                <img src={image} />
                <CardContent className="card-products-content">
                    <Typography>{title}</Typography>
                    <Typography>${price.toFixed(2)}</Typography>
                </CardContent>
            </Card>

        </Grid>
        {
            isSelected &&
            <productInfo product={product} open={isSelected} setOpen={setIsSelected} />
        }
    </>
    );
}

export default productDetail;