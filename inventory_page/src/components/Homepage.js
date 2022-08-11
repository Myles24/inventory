import ArrowRight from "@mui/icons-material/ArrowRight";
import { Paper } from "@mui/material";
import "./main.css";
import { Link } from "react-router-dom";


function Homepage() {
    const paperstyle1={
        width: 300,
        height: 300,
        backgroundColor: "green",
        padding: "20px"
    }
    const paperstyle2={
        width: 300,
        height: 300,
        backgroundColor: "red",
        margin: "20px"
    }
    const paperstyle3={
        width: 300,
        height: 300, 
        backgroundColor: "blue",
        margin: "20px"
    }

    return(
        <div>
            <div className="title">
                <h1>New Castle County Hope Center</h1>
            </div>
            <div className="image">
            <img src="https://i.ytimg.com/vi/cHot4QDi7NY/maxresdefault.jpg" alt="hopecenterimg"></img>
            </div>
            <div className="text">
            <p>
                Statistics have shown that as many as 1165 individuals are homeless on any given night in Delaware.  
                The Hope Center was built in order to combat this overarching issue by creating a 
                temporary housing center that helps these people get back on their feet.  
            </p>
            </div>
            <div className="header1">
                <h1>Get Involved!</h1>
            </div>
            <div className="involved">
                <div>
                <Link to="inventory">
                <Paper style={paperstyle1}>
                    <div className="paper-text">
                        <p>View <br></br>Inventory <ArrowRight></ArrowRight></p>
                    </div>
                </Paper>
                </Link>
                </div>
                <div>
                <Paper style={paperstyle2}>
                <div className="paper-text">
                        <p>Donate<ArrowRight></ArrowRight></p>
                    </div>
                </Paper>
                <div>
                <Link to="/cart">
                <Paper style={paperstyle3}>
                <div className="paper-text">
                        <p>Request <br></br>Items <ArrowRight></ArrowRight></p>
                    </div>
                </Paper>
                </Link>
                </div>
                </div>
            </div>
        </div>
        
    );

        
}

export default Homepage;