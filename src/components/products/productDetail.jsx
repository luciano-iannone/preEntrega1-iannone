import { Card, CardContent, Grid, Typography } from "@mui/material";
import productInfo from "./productInfo";
import { useEffect,useState } from "react";
import { collection, doc, getDocs, getFirestore, limit, query} from 'firebase/firestore';

const productDetail = ({ product, children }) => {
    const { id, image, title, price, itHadDues, isAnOffer, stock } = product
    const [newProduct, setNewProduct] = useState()
    const [isSelected, setIsSelected] = useState(false);

    useEffect(()=>{
        const db = getFirestore();
        const productCollection = querycollection(db, 'products');
        getDocs(productCollection).then((snapshot) => {
                setNewProduct(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
        })
    }, [])

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