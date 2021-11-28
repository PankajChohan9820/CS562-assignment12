import 'bootstrap/dist/css/bootstrap.min.css';
import BTable from 'react-bootstrap/Table';

export const ProductTable = ({ product, deleteById, filter }) => {
    const productArray = Object.keys(product)
        .map(e=>product[e])
        .filter(({name})=>name.toLowerCase().includes(filter.toLowerCase()));
    return (
    <div>
        <BTable striped bordered hover size="em" style={{width:"20%"}}>
            <tbody>
                <tr style={{backgroundColor:"black"}}>

                    <th style={{ color:"white"}}>Name</th>
                    <th style={{ color:"white"}}>Category</th>
                    <th style={{ color:"white"}}>Price</th>
                    <th style={{ color:"white"}}>Delete</th>
                </tr>
                {productArray.map((product) =>(
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td><button type="submit"  className="btn btn-primary" onClick={()=>deleteById(product.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </BTable>
    </div>
)
                }
