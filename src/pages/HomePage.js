import React from "react";
import Head from "../components/Head";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/local-data"
import { useSearchParams } from 'react-router-dom';
import Search from "../components/Search";

function HomePageWrapper(){
    const [SearchParams, setSearchParams] = useSearchParams();

    const keyword = SearchParams.get('keyword');

    function changeSearchParams(keyword){
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes : getActiveNotes(),
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
                    <Head title="Personal Notes" subtitle="Catatan yang Aktif" />
                </section>
                <section>
                    <div className="search-container">
                        <Search keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                    </div>
                    <NoteList notes={notes} type="catatan" />
                </section>
            </>
        )
    }
}

export default HomePageWrapper;