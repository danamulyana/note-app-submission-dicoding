import React from "react";
import { getNote, archiveNote,unarchiveNote,deleteNote } from "../utils/local-data"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DetailNote from "../components/DetailNote";
import Page404 from "./Page404";

function DetailPageWrapper() {
    const { id } = useParams();
    const navigation = useNavigate();

    return <DetailPage id={id} navigation={navigation} />;
}

class DetailPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            note : getNote(props.id),
        }

        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onArchiveHandler(){
        if(!this.state.note.archived){
            archiveNote(this.state.note.id);
        }else{
            unarchiveNote(this.state.note.id);
        }

        this.props.navigation('/archives');    
    }

    onDeleteHandler(){
        deleteNote(this.state.note.id);
        this.props.navigation('/'); 
    }

    render(){
        if (!this.state.note) {
            return <Page404 />;
        }

        return(
            <section>
                <DetailNote {...this.state.note} onArsip={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}

export default DetailPageWrapper;