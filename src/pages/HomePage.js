import React from "react";
import Head from "../components/Head";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import Search from "../components/Search";
import { HomePageLang } from "../utils/language";
import LocaleContext from "../context/LocaleContext";
import Loading from "../components/Loading";

function HomePage() {
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
      const { data } = await getActiveNotes();

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
          title={HomePageLang[lang].title}
          subtitle={HomePageLang[lang].subtitle}
        />
      </section>
      <section>
        <div className="search-container">
          <Search
            placeholder={HomePageLang[lang].search}
            keyword={keyword}
            keywordChange={changeSearchParams}
          />
        </div>
        <NoteList notes={filteredNotes} noList={HomePageLang[lang].list} />
      </section>
    </>
  );
}

export default HomePage;
