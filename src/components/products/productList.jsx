import { CircularProgress, Grid, Typography } from "@mui/material";
import useAsyncMock from "../hooks/useAsyncMock";
import products from '../mocks/products.json';
import ProductDetail from "./productDetail";
import productInfo from "./productInfo";

const ProductList = () => {
    const { data, loading } = useAsyncMock(products)

    if (loading) return <CircularProgress />

    return (<div className="container">
        <Typography variant="h2" style={{ color: "#68D89B" }}>
            Products
        </Typography>
        <Grid container spacing={3}>
            {
                data.map((product) => {
                    return (
                        <ProductDetail key={product.id} product={product}>
                        </ProductDetail>
                    )
                })
            }
        </Grid>

    </div>);
}

export default ProductList;