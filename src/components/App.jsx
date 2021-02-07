import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";



function App(){
    return(
        <div>
            <Header />
            {Notes.map(Notes => {
                    return( 
                        <Note 
                            key= {Notes.key}
                            title ={Notes.title}
                            content ={Notes.content}
                        />
                    );
                }
            )}
            <Footer />
        </div>
    );
}

export default App;