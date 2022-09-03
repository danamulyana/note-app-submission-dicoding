import React from "react";
import { getNote, archiveNote,unarchiveNote,deleteNote } from "../utils/network-data"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DetailNote from "../components/DetailNote";
import Page404 from "./Page404";
import Loading from "../components/Loading";

function DetailPage() {
    const { id } = useParams();
    const navigation = useNavigate();
    const [note,setNote] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function getNoteFunc(){
            const { data } = await getNote(id);

            setNote(data);
            setLoading(false);
        }

        getNoteFunc();
    },[]);

    const onArchiveHandler = async () => {
        if(!note.archived){
            const { error } = await archiveNote(note.id);

            if(!error){
                navigation('/archives');   
            }
        }else{
            const { error } = await unarchiveNote(note.id);
            if(!error){
                navigation('/');
            }
        }
    }

    const onDeleteHandler = async () => {
        await deleteNote(note.id);
        navigation('/'); 
    }

    if(loading){
        return <Loading />;
    }

    if (!note) {
        return <Page404 />;
    }

    return(
        <section>
            <DetailNote {...note} onArsip={onArchiveHandler} onDelete={onDeleteHandler} />
        </section>
    )
}

export default DetailPage;