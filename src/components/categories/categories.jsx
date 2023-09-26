import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import useAsyncMock from "../hooks/useAsyncMock";
import categories from '../mocks/categories.json';
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, loading } = useAsyncMock(categories)

    if (loading) return <CircularProgress />

    return (<div className="container">
        <Typography variant="h2" sytle={{color:"black"}}>
            Categories
        </Typography>
        {
            data.map((category) => {
                return (
                    <Card key={category.id}>
                        <CardContent component={Link} to={`/category/${category.category}`} style={{color: "black"}}>
                            <Typography >{category.category}</Typography>
                        </CardContent>
                    </Card>
                )
            })
        }
    </div>);
}

export default Categories;