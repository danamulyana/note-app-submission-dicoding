import React from "react";
import Head from "../components/Head";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/network-data";
import Search from "../components/Search";
import { useSearchParams } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";
import { ArsipPageLang } from "../utils/language";
import Loading from "../components/Loading";

function ArsipPage() {
  const [loading, setLoading] = React.useState(true);
  const [SearchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return SearchParams.get("keyword") || "";
  });
  const { lang } = React.useContext(LocaleContext);

  const changeSearchParams = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  React.useEffect(() => {
    async function getContactActive() {
      const { data } = await getArchivedNotes();

      setNotes(data);
      setLoading(false);
    }

    getContactActive();
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <Head
          title={ArsipPageLang[lang].title}
          subtitle={ArsipPageLang[lang].subtitle}
        />
      </section>
      <section>
        <div className="search-container">
          <Search
            placeholder={ArsipPageLang[lang].search}
            keyword={keyword}
            keywordChange={changeSearchParams}
          />
        </div>
        <NoteList notes={filteredNotes} noList={ArsipPageLang[lang].list} />
      </section>
    </>
  );
}

export default ArsipPage;
