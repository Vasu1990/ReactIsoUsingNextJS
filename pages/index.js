import fetch from "isomorphic-unfetch";
import Layout from "../components/layout";


const Index = (props) => (
        <Layout>
                <h1>Bit Coin Data Home</h1>
                <pre>{JSON.stringify(props.dataProp, null, 2) }</pre>
        </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const response = await res.json();
    
    return {
        dataProp: response
    }
}



export default Index;


