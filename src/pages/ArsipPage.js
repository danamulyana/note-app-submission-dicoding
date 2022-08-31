import React from "react";
import Head from "../components/Head";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data"
import Search from "../components/Search";
import { useSearchParams } from "react-router-dom";

function ArsipPageWrapper(){
    const [SearchParams, setSearchParams] = useSearchParams();

    const keyword = SearchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({ keyword });
    }

    return <ArsipPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArsipPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes : getArchivedNotes(),
            keyword: props.defaultKeyword || "",
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword){
        this.setState(() => {
            return{
                keyword,
            }
        })

        this.props.keywordChange(keyword);
    }
    
    render(){
        const notes = this.state.notes.filter((note) => {
            return note.title.toLocaleLowerCase().includes(
                this.state.keyword.toLocaleLowerCase()
            );
        });

        return(
            <>
                <section>
                    <Head title="Personal Notes Arsip" subtitle="Catatan yang sudah di arsip" />
                </section>
                <section>
                    <div className="search-container">
                        <Search keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                    </div>
                    <NoteList notes={notes} type="arsip" />
                </section>
            </>
        )
    }
}

export default ArsipPageWrapper;